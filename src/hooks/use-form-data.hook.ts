import { useCallback, useState } from "react";

export const useFormData = <
  V extends Record<string, any>,
  T extends Record<keyof V, boolean> = Record<
    keyof V,
    boolean
  >
>(
  initialValues: V
) => {
  const [values, setValues] = useState<V>(initialValues);

  const [touched, setTouched] = useState<T>(() => {
    return Object.keys(initialValues).reduce(
      (record, field) => {
        return { ...record, [field]: false };
      },
      {} as T
    );
  });

  const setFieldValue = useCallback(
    (field: keyof V, value: any) => {
      setValues((prevValues) => ({
        ...prevValues,
        [field]: value
      }));

      setTouched((prevTouched) => ({
        ...prevTouched,
        [field]: true
      }));
    },
    []
  );

  return { values, touched, setFieldValue };
};

export default useFormData;
