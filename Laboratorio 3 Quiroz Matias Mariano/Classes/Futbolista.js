class Futbolista extends Persona {
  constructor(id, nombre, apellido, edad, equipo, posicion,cantidadGoles) {
    super(id, nombre, apellido, edad);
    this.equipo = equipo;
    this.posicion = posicion;
    this.cantidadGoles = cantidadGoles;
  }

  toString() {
    return (
      super.toString() + `, equipo: ${this.equipo}, posicion: ${this.posicion},cantidadGoles: ${this.cantidadGoles}`
    );
  }

  toJson() {
    const personaJson = super.toJson();
    const futbolistaJson = JSON.stringify({
      equipo: this.equipo,
      posicion: this.posicion,
      cantidadGoles: this.cantidadGoles,
    });
    return Object.assign(JSON.parse(personaJson), JSON.parse(futbolistaJson));
  }

  update(data){
    super.update(data);
    this.equipo = data.equipo;
    this.posicion = data.posicion;
    this.cantidadGoles = Number(data.cantidadGoles);
  }
}