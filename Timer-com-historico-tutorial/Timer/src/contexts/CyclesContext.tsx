import { ReactNode, createContext, useState } from "react";

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    stopDate?: Date;
    completedDate?: Date;
}
interface CreateCycleData{
    Project: string;
    DurationInMinutes: number;
}
interface CyclesContextData{
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    markCycleAsCompleted: () => void;
    amountSecondsPassed: number;
    setSecondsPassed: (seconds: number) => void;
    CreateNewCycle: (data: CreateCycleData) => void;
    StopCycle:() => void;
}

export const CycleContext = createContext({} as CyclesContextData);


interface CycleContextProviderProps{
    children: ReactNode;
}
export function CycleContextProvider({ children }: CycleContextProviderProps){
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string| null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
    
    function markCycleAsCompleted(){
        setCycles(oldState =>
            oldState.map(cycle => {
                if(cycle.id === activeCycleId){
                    return {...cycle, completedDate: new Date()}
                }
                else{
                    return cycle
                }
            })
        )
    }

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds);
    }

    function CreateNewCycle(data: CreateCycleData){
        const id = String(new Date().getTime());
        const newCycle: Cycle = {
            id,
            task: data.Project,
            minutesAmount: data.DurationInMinutes,
            startDate: new Date()
        }

        setCycles(( state => [...state, newCycle ]));
        setActiveCycleId(id);
        setAmountSecondsPassed(0);
    }

    function StopCycle(){
        setCycles(oldState => 
            oldState.map(cycle => {
                if(cycle.id === activeCycleId){
                    return {...cycle, stopDate: new Date()}
                }
                else{
                    return cycle
                }
            })
        )
        setActiveCycleId(null);
        document.title = "My Timer";
    }


    return(
        <CycleContext.Provider value={{ cycles,activeCycle, activeCycleId, markCycleAsCompleted, amountSecondsPassed, setSecondsPassed, CreateNewCycle, StopCycle}}>
            {children}
        </CycleContext.Provider>
        
    );
}