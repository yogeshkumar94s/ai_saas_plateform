import { navLinks } from "@/constants";

const HomePage = ({ searchParams }: SearchParamProps) => {
  const searchQuery = (searchParams?.query as string) || "";
  return (
    <div>
      <p>HomePage</p>
    </div>
  );
};

export default HomePage;
