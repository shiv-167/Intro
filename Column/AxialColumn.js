class AxialColumn{
  constructor(Pu,fck,fy){
    console.log('Load : '+Pu+' kN');
    console.log('fck : '+fck+' MPa');
    console.log('fy : '+fy+' MPa');
    this.Pu=Pu;
    this.fck=fck;
    this.fy=fy;

  }
  GetAreaOfConcrete(p){
   
   let ac= this.Pu*1000/(0.4*this.fck+p/100*(0.67*this.fy-0.4*this.fck));

   return parseFloat(ac);
  }
}