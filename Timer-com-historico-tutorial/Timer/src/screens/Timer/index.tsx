import { HandPalm, Play } from "phosphor-react";
import * as zod from 'zod';
import { TimerContainer, SubmitButton, StopCycleButton } from "./styles";
import { useContext } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CycleContext } from "../../contexts/CyclesContext";



const newCycleFormValidationSchema = zod.object({
    Project: zod.string().min(1, 'Informe a Tarefa.'),
    DurationInMinutes: zod.number().min(5).max(60)
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Timer(){

    const { CreateNewCycle, StopCycle, activeCycle} = useContext(CycleContext);
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            DurationInMinutes: 0,
            Project: ''
        }
    });

    const  { handleSubmit, watch, reset } = newCycleForm;
    function handleCreateNewCycle(data: NewCycleFormData){
        CreateNewCycle(data);
        reset();
    }
    const project = watch('Project');
    return (

        <TimerContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} id="newProject">
                
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm/>
                    </FormProvider>
                     <Countdown/>
                {
                    activeCycle ? 
                        <StopCycleButton onClick={StopCycle} type="button">
                            <HandPalm/> Interromper
                        </StopCycleButton>
                    :
                    <SubmitButton type="submit" form="newProject" disabled={!project}>
                        <Play/> Começar
                    </SubmitButton>
                }
            </form>
        </TimerContainer>

        //styled-components
    )
}