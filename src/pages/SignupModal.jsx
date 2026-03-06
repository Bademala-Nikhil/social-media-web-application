import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) return;

    localStorage.setItem("loggedIn", "true");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={submit}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3 mb-4"
        />

        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-3"
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-xl font-semibold">
          Sign Up
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
}