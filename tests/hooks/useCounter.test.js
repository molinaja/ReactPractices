import { act, renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks/useCounter'

describe('Test useCounter', () => {
    
    test('Debe de retornar los valores por defecto', () => { 
        
        let {result} = renderHook(
            () => useCounter()
        );
        //console.log(result);
        let { counter, decrement, increment, reset} = result.current

        expect(
            counter
        ).toBe(10);

        expect ( 
            decrement 
        ).toEqual( 
            expect.any(Function) 
        );

        expect ( 
            increment 
        ).toEqual( 
            expect.any(Function) 
        );

        expect ( 
            reset 
        ).toEqual( 
            expect.any(Function) 
        );

     })

     test('Debe de generar el counter con el valor de 100 ', () => { 

        let {result} = renderHook(
            () => useCounter(100)
        );
        //console.log(result);
        let { counter, decrement, increment, reset} = result.current

        expect(
            counter
        ).toBe(100);

      })

      test('debe validar el incremento del contador', () => { 

        let {result} = renderHook(
            () => useCounter(100)
        );
        //console.log(result);
        //let { counter, decrement, increment, reset} = result.current

        act(
            ()=>{
                result.current.increment(); 
            }
        )

        expect(result.current.counter).toBe(101)


       })

});
