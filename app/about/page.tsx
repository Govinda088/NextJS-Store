import db from "@/utils/db";

const AboutPage = async () => {
  const profile = await db.testProfile.create({
    data: {
      name: "Random Some",
    },
  });

  const users = await db.testProfile.findMany();

  return (
    <div>
      {users.map((user) => {
        return (
          <h2 key={user.id} className="text-2xl font-semibold">
            {user.name}
          </h2>
        );
      })}
    </div>
  );
};
export default AboutPage;
