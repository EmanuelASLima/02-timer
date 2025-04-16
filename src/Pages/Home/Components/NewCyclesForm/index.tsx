import { useForm } from "react-hook-form";  
import { FormContainer, TaskInput, MinutesAmountInput } from "../../styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O ciclo deve ser de no mínimo minutos")
    .max(60, "O ciclo deve ser de no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCyclesForm() {

  const { register, handleSubmit, watch } = useFormForm<NewCycleFormData>({
    resolver: zodResolveresolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

    return (
  <FormContainerner>
    <label htmlFor="task">Vou trabalhar em</label>
    <TaskInput
      type="text"
      list="task-sugestions"
      id="task"
      placeholder="Qual sua atividade?"
      disabled={!!activeCycle}
      {...register("task")}
    />

    <datalist id="task-sugestions">
      <option value="Projeto 1" />
      <option value="Projeto 2" />
      <option value="Projeto 3" />
    </datalist>

    <label htmlFor="minutesAmount">durante</label>
    <MinutesAmountInput
      type="number"
      id="minutesAmount"
      placeholder="00"
      step={5}
      min={1}
      max={60}
      defaultValue={5}
      {...register("minutesAmount", { valueAsNumber: true })}
    />

    <span>minutos.</span>
  </FormContainer>;
    )
}
