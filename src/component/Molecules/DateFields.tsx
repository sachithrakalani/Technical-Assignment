import Field, { inputStyles } from "../Atoms/Field";

export default function DateFields({
  checkin,
  checkout,
  onChange,
  min = "",
  required = false,
}: {
  checkin: string;
  checkout: string;
  min?: string;
  required?: boolean;
  onChange: (field: "checkin" | "checkout", value: string) => void;
}) {
  return (
    <>
      <Field label="Check-in">
        <input
          className={inputStyles}
          name="checkin"
          type="date"
          min={min}
          value={checkin}
          required={required}
          onChange={(e) => onChange("checkin", e.target.value)}
        />
      </Field>
      <Field label="Check-out">
        <input
          className={inputStyles}
          name="checkout"
          type="date"
          min={checkin || min}
          value={checkout}
          required={required}
          onChange={(e) => onChange("checkout", e.target.value)}
        />
      </Field>
    </>
  );
}
