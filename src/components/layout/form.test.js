const form = require('./form');

test('limita el envio a contendido del formulario relleno',()=>{
    expect(form.submitEmail()).toBe("Porfavor, rellena todos los campos");
})