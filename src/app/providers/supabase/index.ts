import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jwtqnrwdnknukdyjqhdl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dHFucndkbmtudWtkeWpxaGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyODQ5NzIsImV4cCI6MjAxMDg2MDk3Mn0.Kd-sGp6IEF6l_CpH72lCrqK-kj61xJQyellzZjDe-2s";

export const supabase = createClient(supabaseUrl, supabaseKey);
