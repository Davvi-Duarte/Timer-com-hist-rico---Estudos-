import { useFormContext } from "react-hook-form";
import { FormContainer, ProjectDurationInput, ProjectNameInput } from "./styles";
import { useContext } from "react";
import { CycleContext } from "../../../../contexts/CyclesContext";



export function NewCycleForm(){
    const { activeCycle } = useContext(CycleContext);
    const { register } = useFormContext();
    return(
        <FormContainer>
                    <label htmlFor="ProjectName">Vou trabalhar em</label>
                    <ProjectNameInput
                        type="text" 
                        list="ProjectSuggestions" 
                        id="ProjectName" 
                        placeholder="Dê um nome para seu projeto"
                        disabled={!!activeCycle}
                        {...register('Project')}
                    />
                    <datalist id="ProjectSuggestions">
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                    </datalist>
                    <label htmlFor="ProjectDurationInMinutes">durante</label>
                    <ProjectDurationInput
                        type="number" 
                        id="ProjectDurationInMinutes" 
                        placeholder="00"
                        step={5}
                        min={1}
                        max={60}
                        disabled={!!activeCycle}
                        {...register('DurationInMinutes', {valueAsNumber: true})}
                    />
                    <span>minutos</span>
                </FormContainer>
    );
}