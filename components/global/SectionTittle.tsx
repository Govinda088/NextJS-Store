import { Separator } from "@/components/ui/separator";

const SectionTittle = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h2>
      <Separator></Separator>
    </div>
  );
};
export default SectionTittle;
