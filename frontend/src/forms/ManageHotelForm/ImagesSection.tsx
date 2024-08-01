import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImagesSection = () => {
  const {
    register,
    formState: { error },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Images</h2>
      <div className="border rounded p-4 flex flex-col gap-4">
        <input
          type="file"
          multiple
          accept="image/*"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength = imageFiles.length;
              if (totalLength === 0) {
                return "At least one image should be added";
              }
            },
          })}
        />
      </div>
    </div>
  );
};

export default ImagesSection;
