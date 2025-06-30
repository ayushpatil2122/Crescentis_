// ------------ 1 ------------

// "use client";
// import { useState } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     rolesHiringFor: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       if (res.ok) {
//         setSubmitted(true);
//         setFormData({ name: "", email: "", phone: "", company: "", rolesHiringFor: "" });
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
//       <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact our sales team</h2>
//           <p className="text-gray-600">Tell us a bit about yourself, so we can direct you to the right person.</p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name *</label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Business Email *</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone number *</label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               placeholder="+91"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Company *</label>
//             <input
//               type="text"
//               name="company"
//               required
//               value={formData.company}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">How many roles are you hiring for this year? *</label>
//             <select
//               name="rolesHiringFor"
//               required
//               value={formData.rolesHiringFor}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             >
//               <option value="">Select...</option>
//               <option value="<5">&lt;5</option>
//               <option value="6-50">6-50</option>
//               <option value="51-100">51-100</option>
//               <option value="101-1000">101-1000</option>
//               <option value="1001+">1001+</option>
//             </select>
//           </div>


//           {submitted && <p className="text-green-600 font-semibold">Thank you! We'll get in touch soon.</p>}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// ------------ 2 ------------

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function ContactPage() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     rolesHiringFor: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setSubmitted(true);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           company: "",
//           rolesHiringFor: "",
//         });

//         // Redirect to homepage after 3 seconds
//         setTimeout(() => {
//           router.push("/");
//         }, 2000);
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
//       <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact our sales team</h2>
//           <p className="text-gray-600">
//             Tell us a bit about yourself, so we can direct you to the right person.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name *</label>
//             <input
//               type="text"
//               name="name"
//               required
//               disabled={submitted}
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Business Email *</label>
//             <input
//               type="email"
//               name="email"
//               required
//               disabled={submitted}
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone number *</label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               disabled={submitted}
//               placeholder="+91"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Company *</label>
//             <input
//               type="text"
//               name="company"
//               required
//               disabled={submitted}
//               value={formData.company}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               How many roles are you hiring for this year? *
//             </label>
//             <select
//               name="rolesHiringFor"
//               required
//               disabled={submitted}
//               value={formData.rolesHiringFor}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//             >
//               <option value="">Select...</option>
//               <option value="<5">&lt;5</option>
//               <option value="6-50">6-50</option>
//               <option value="51-100">51-100</option>
//               <option value="101-1000">101-1000</option>
//               <option value="1001+">1001+</option>
//             </select>
//           </div>

//           {submitted && (
//             <p className="text-green-600 font-semibold">
//               Thank you! We’ll get in touch soon. Redirecting to homepage...
//             </p>
//           )}

//           <button
//             type="submit"
//             disabled={submitted}
//             className="w-full bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// ------------ 3 ------------

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    rolesHiringFor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thank you! We'll get in touch soon.");
        router.push("/"); // ⬅️ Navigate to homepage immediately
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact our sales team</h2>
          <p className="text-gray-600">Tell us a bit about yourself, so we can direct you to the right person.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Business Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone number *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company *</label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              How many roles are you hiring for this year? *
            </label>
            <select
              name="rolesHiringFor"
              required
              value={formData.rolesHiringFor}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="">Select...</option>
              <option value="<5">&lt;5</option>
              <option value="6-50">6-50</option>
              <option value="51-100">51-100</option>
              <option value="101-1000">101-1000</option>
              <option value="1001+">1001+</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
