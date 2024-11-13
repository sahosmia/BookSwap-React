import momin from "../assets/Mominul.jpg";
import riyanka from "../assets/riiyanka.jpg";

const Contacts = () => {
  const contacts = [
    {
      name: "Mominul Islam",
      role: "Product Manager",
      image: momin,
    },
    {
      name: "Riyanka Biswas ",
      role: "Head of Content",
      image: riyanka,
    },
  ];

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h2 className="mb-4 text-3xl font-bold text-center">CONTACTS</h2>
      <p className="mb-2 text-center text-gray-600">
        If you have any questions, please contact us by email. by mail:
      </p>
      <p className="mb-6 text-center text-teal-500">
        <a href="mailto:hello@bookswap.lt">hello@bookswap.lt</a>
      </p>

      <div className="flex flex-col justify-center gap-8 md:flex-row">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={contact.image}
              alt={contact.name}
              className="mb-3 rounded-full shadow-md w-28 h-28"
            />
            <a href="#" className="font-semibold text-blue-500 hover:underline">
              {contact.name}
            </a>
            <p className="text-gray-500">{contact.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
