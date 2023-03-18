import { useState } from "react";
import { useForm } from "react-hook-form";
import { app } from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(app);

const People = () => {
  const { register, handleSubmit } = useForm();
  const [people, setPeople] = useState([]);

  const onSubmit = async (data) => {
    const searchTerm = data.searchTerm.trim();
    const searchPhrase = searchTerm.toLowerCase();

    const q = query(
      collection(db, "people"),
      where("FullName", ">=", searchPhrase),
      where("FullName", "<=", searchPhrase + "\uf8ff")
    );

    getDocs(q).then((querySnapshot) => {
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });

      console.log(results);
      if (results.length === 0) {
        setPeople(null); // no results found
      } else {
        setPeople(results);
      }
    });
  };

  return (
    <div className="people">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("searchTerm")}
          placeholder="Search by name or surname"
        />
        <button type="submit">Search</button>
      </form>
      {people ? (
        people.map((person) => (
          <div key={person.id}>
            <p>Name: {person.name}</p>
            <p>Surname: {person.surname}</p>
            <p>Age: {person.age}</p>
            {/* Add any other fields you want to display */}
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default People;
