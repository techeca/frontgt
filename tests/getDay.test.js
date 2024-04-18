import { describe, expect, it, test } from 'vitest'
import getDay from '../src/utils/getDay'

describe('Entrega el numero del día de la semana del 0 al 6', () => {
    it('Si es domingo debe ser 6', () => {
        const d = new Date('April 7, 2024')
        expect(getDay(d)).toBe(6)
    })
    it('Si es Lunes debe ser 0', () => {
        const d = new Date('April 1, 2024')
        expect(getDay(d)).toBe(0)
    })
})