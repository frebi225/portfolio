import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  try {
    // Créer le client Supabase
    const supabase = createClient()

    // Vérifier les tables disponibles
    const { data: tables, error: tablesError } = await supabase
      .from("information_schema.tables")
      .select("table_name")
      .eq("table_schema", "public")

    // Vérifier les colonnes de la table conversations
    const { data: columns, error: columnsError } = await supabase
      .from("information_schema.columns")
      .select("column_name, data_type, is_nullable")
      .eq("table_schema", "public")
      .eq("table_name", "conversations")

    // Vérifier les politiques de sécurité
    const { data: policies, error: policiesError } = await supabase
      .from("pg_catalog.pg_policies")
      .select("policyname, cmd, qual")
      .eq("schemaname", "public")
      .eq("tablename", "conversations")

    return NextResponse.json({
      tables: tablesError ? { error: tablesError.message } : tables,
      columns: columnsError ? { error: columnsError.message } : columns,
      policies: policiesError ? { error: policiesError.message } : policies,
    })
  } catch (error: any) {
    console.error("Erreur dans l'API de vérification des permissions:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: error.stack,
      },
      { status: 500 },
    )
  }
}
