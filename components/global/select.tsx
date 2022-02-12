import { UseFormRegister } from "react-hook-form";
import Errror from "./error";

type form = {
    network?: string;
    PhoneNumber?: number;
  };
  
  type inputProp = {
    register: UseFormRegister<form>;
    name: "PhoneNumber" | "network"  ;
    label: string;
    required?: boolean;
    onChange?: (e:React.ChangeEvent<HTMLSelectElement>)=>void;
    errors: any;
    containerStyle?: string;
    data:string[]
  };


export default function Select({register,name,label,required=true,errors,data,onChange,...rest}: inputProp) {

  
  return (
    <div className="block">
      <label>{label}</label>
      <select 
        {...rest}
        {...register(name, { required: required })}
         className={errors[name] &&"border-red-600"}
         onBlur={(e)=>onChange?.(e)}
      >
        {data.map((item,index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      {errors[name] && <Errror message={`${label} is required`} />}

    </div>
  )
}



  