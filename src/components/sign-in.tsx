import { signIn } from "../../auth";

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
      className="space-y-6"
    >
      <label className="block">
        <span className="block text-sm font-medium text-gray-400">Email</span>
        <input
          name="email"
          type="email"
          placeholder="your@example.com"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-300"
          required
        />
      </label>
      <label className="block">
        <span className="block text-sm font-medium text-gray-400">Password</span>
        <input
          name="password"
          type="password"
          placeholder="********"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-300"
          required
        />
      </label>
      <button
        type="submit"
        className="w-full py-3 bg-gray-700 px-4 text-white rounded-lg shadow hover:bg-gray-800 transition-colors"
      >
        Sign In
      </button>
    </form>
  );
}
