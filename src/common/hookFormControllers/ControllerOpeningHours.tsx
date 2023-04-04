import { Controller } from "react-hook-form";
import { TimePickerMobile } from "../ui-elements/datePickerMobile/TimePickerMobile";
import cn from "classnames";
import s from "./formFields.module.scss";

export interface ControllerOpeningHoursType {
 control: any;
 watch?: any;
 required?: boolean;
}

export const ControllerOpeningHours = ({
 control,
 watch,
 required = false,
}: ControllerOpeningHoursType) => {
 return (
  <div className={s.ageRange}>
   <div className={s.styleInput}>
    <Controller
     name="from_opening_hours"
     control={control}
     rules={{
      required: required ? "Обязательное поле" : false,
     }}
     render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => (
      //<div className={s.sizeInput}>
      // <TimePickerMui
      //  minTime={dayjs("2023-03-01T08:00")}
      //  placeholder="Часы работы с"
      //  value={value}
      //  onChange={onChange}
      //  errors={errors.fromAge}
      //  {...field}
      // />
      //</div>

      <div className={cn(s.sizeInput, s.wrappPicker)}>
       <TimePickerMobile
        value={value}
        placeholder="Часы работы с"
        onChange={onChange}
        error={errors.from_opening_hours}
        {...field}
       />
      </div>
     )}
    />
   </div>

   <div className={s.styleInput}>
    <Controller
     name="to_opening_hours"
     control={control}
     rules={{
      required: required ? "Обязательное поле" : false,
     }}
     render={({ field: { onChange, value, ref, ...field }, formState: { errors } }) => (
      //<div className={s.sizeInput}>
      // <TimePickerMui
      //  maxTime={dayjs("2023-03-01T21:00")}
      //  watch={watch("from_opening_hours")}
      //  placeholder="До"
      //  value={value}
      //  onChange={onChange}
      //  errors={errors.toAge}
      //  {...field}
      // />
      //</div>
      <div className={cn(s.sizeInput, s.wrappPicker)}>
       <TimePickerMobile
        watch={watch("from_opening_hours")}
        value={value}
        placeholder="До"
        onChange={onChange}
        error={errors.to_opening_hours}
        {...field}
       />
      </div>
     )}
    />
   </div>
  </div>
 );
};
