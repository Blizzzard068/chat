const { createClient } = supabase;
const _supabase = createClient(
  "https://gliwcgurcvwuomgwnpbx.supabase.co",
  "sb_publishable_ly_-N6V1z0_ww4P5vQ97rA_0an9kg-O"
);

document.addEventListener("alpine:init", () => {
  Alpine.data("auth", () => ({
    email: "",
    password: "",
    logFailed: false,
    loggedIn: false,

    async login() {
      //const supabase = createClient("https://gliwcgurcvwuomgwnpbx.supabase.co", "");

      const { data, error } = await _supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password,
      });

      if (error) {
        console.error(error);
        this.logFailed = true;
      } else {
        console.log("Eingeloggt: ");
        //console.log(data.user);
        this.loggedIn = true;
      }
    },
  }));
});
