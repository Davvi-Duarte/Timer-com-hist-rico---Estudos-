import { Routes, Route } from 'react-router-dom';
import { Timer } from '../../screens/Timer';
import { History } from '../../screens/History';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export function RoutesComponent(){
    return(

        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Timer/>}/>
                <Route path='/history' element={<History/>}/>
            </Route>            
        </Routes>
        )
}