interface SingleSubjectNavProps {
  allTaps: { name: string }[];
  tap: string;
  setTap: (tap: string) => void;
}

const Taps = ({ allTaps, tap, setTap }: SingleSubjectNavProps) => {
  return (
    <div className="flex flex-row items-center justify-start overflow-x-auto border-b border-gray">
      {allTaps.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => setTap(item.name)}
            className={`text-decoration-none mx-3 cursor-pointer py-2 md:p-2 ${
              tap === item.name
                ? " border-b-2 border-black font-bold"
                : "text-gray"
            }`}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Taps;
