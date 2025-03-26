// Class to represent a single stress-strain data point
class StressStrain {
  constructor(strain, stress) {
    this.strain = strain;
    this.stress = stress;
  }
}
class StressInConcrete{
  
  static  getStress(strain,fck){
    if(strain>=0.002)
      return 0.447*fck;
    else
    return 447*strain*fck*(1.0-250.0*strain);
  }
}

class StressStrainCurve {
  constructor() {
    // Stress-strain data for Fe415
    this.fe415 = [
      new StressStrain(0.001444, 288.7),
      new StressStrain(0.00163, 306.7),
      new StressStrain(0.00192, 324.8),
      new StressStrain(0.00241, 342.8),
      new StressStrain(0.00276, 351.8),
      new StressStrain(0.00381, 360.9),
    ];

    // Stress-strain data for Fe500
    this.fe500 = [
      new StressStrain(0.00174, 347.8),
      new StressStrain(0.00195, 369.6),
      new StressStrain(0.00226, 391.6),
      new StressStrain(0.00277, 413.0),
      new StressStrain(0.00312, 423.9),
      new StressStrain(0.00417, 434.8),
    ];
  }

  // Linear interpolation between two points
  interpolate(y2, y1, x2, x1, x) {
    if (x2 === x1) {
      throw new Error("x1 and x2 cannot be the same value.");
    }
    return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
  }

  // Find interpolated stress for a given strain in a curve (Fe415 or Fe500)
  getStressAtStrain(fy, strain) {
    let curve;
  
    if (fy === 415) {
      curve = this.fe415;
    } else if (fy === 500) {
      curve = this.fe500;
    } else if (fy === 250) {
      // For mild steel (Fe250), assume linear elastic up to yield
      return Math.min( strain * 200000,217.5); // E = 200000 MPa
    } else {
      return null; // Unsupported grade
    }
    if(curve===this.fe415){
      if(strain<0.001444)
        return strain*200000;
      if(strain>0.00381)
        return 360.9;
    }
    if(curve===this.fe500){
      if(strain<0.00174)
        return strain*200000;
      if(strain>0.00417)
        return 434.8;
    }
  
    for (let i = 0; i < curve.length - 1; i++) {
      const p1 = curve[i];
      const p2 = curve[i + 1];
  
      if (strain >= p1.strain && strain <= p2.strain) {
        return this.interpolate(p2.stress, p1.stress, p2.strain, p1.strain, strain);
      }
    }
  
    return null; // Strain out of range
  }
  
}
