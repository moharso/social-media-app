type HiddenDialogProps = {
  text: string;
  icon: any;
};

const SlideoverHeader = ({text, icon}: HiddenDialogProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="AddCaptionContainerIcon">
        <span>{icon}</span>
      </div>
      <label
        htmlFor="date"
        className="label w-full block text-base font-bold cursor-pointer w-auto"
      >
        {text}
      </label>
    </div>
  );
};

export default SlideoverHeader;
