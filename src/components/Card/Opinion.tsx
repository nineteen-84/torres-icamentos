import { User } from "lucide-react";

interface PropsCardOpinion {
  image?: string;
  comment: string;
  author: string;
}

export const CardOpinion = (props: PropsCardOpinion) => {
  return (
    <>
      <div
        className="h-96 w-full max-w-3xl rounded-xl bg-gray-700 bg-cover bg-center"
        style={{ backgroundImage: `url('/icamentofeedback.jpg')` }}
      />

      <div className="absolute left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gray-300 shadow-lg">
            <User className="h-12 w-12 text-gray-600" />
          </div>
        </div>

        <div className="rounded-xl bg-white px-8 pb-8 pt-16 text-center text-gray-800 shadow-2xl">
          <p className="italic text-gray-600">{props.comment}</p>
          <p className="mt-6 font-bold text-gray-900">{props.author}</p>
        </div>
      </div>
    </>
  );
};
