import { supabase } from "./initialSupabase";

export const handleSubmit = async () => {
  const form = {
    name: name,
    email: email,
  };

  const { data, error } = await supabase
    .from("waitlist")
    .insert([{ response: form }]);

  error ? console.log(error) : console.log(data);
};