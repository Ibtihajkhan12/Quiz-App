import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://xljkwgzsdukphzwlbjqq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhsamt3Z3pzZHVrcGh6d2xianFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MjgzMzQsImV4cCI6MjA2MjAwNDMzNH0.legAsglfbq3uNf9GpAMxMcn9v3axRMFdfZVTsqsSjq8";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
