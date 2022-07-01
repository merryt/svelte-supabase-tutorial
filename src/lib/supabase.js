import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fxtshhsmccrmmwxhqumi.supabase.co';
const SUPABASE_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4dHNoaHNtY2NybW13eGhxdW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYxNjg2ODksImV4cCI6MTk3MTc0NDY4OX0.uGsDOYIX1A9ytgi1cW7863sXWqsXqm8F0Ui8SBofkJ8'

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY)
export default supabase

