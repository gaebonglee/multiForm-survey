import { FormProvider, useForm } from "react-hook-form";
import Section from "../../models/section";
import SectionTitleView from "./SectionTitleView";

interface Props {
  section: Section;
}
export default function SectionView({ section }: Props) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        className="text-gray900 [&>*]:mb-24"
        onSubmit={methods.handleSubmit(handleSubmitData)}
      >
        <SectionTitleView section={section} />
        {section.questions.map((q) => (
          <QuestionView key={q.id} question={q} />
        ))}
        <Button type="submit">{last ? "제출" : "다음"}</Button>
      </form>
    </FormProvider>
  );
}
