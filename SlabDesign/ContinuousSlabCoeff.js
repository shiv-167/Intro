class ContinuousSlabCoeff {
    ip;
    osed;
    oled;
    taed;
    tsed;
    tled;
    tedl;
    teds;
    fed;

    constructor() {
        this.ip = {
            longNeg: 0.032,
            longPos: 0.024,
            spanCoeff: [
                { aspectRatio: 1, supNeg: 0.032, spanPos: 0.024 },
                { aspectRatio: 1.1, supNeg: 0.037, spanPos: 0.028 },
                { aspectRatio: 1.2, supNeg: 0.043, spanPos: 0.032 },
                { aspectRatio: 1.3, supNeg: 0.047, spanPos: 0.036 },
                { aspectRatio: 1.4, supNeg: 0.051, spanPos: 0.039 },
                { aspectRatio: 1.5, supNeg: 0.053, spanPos: 0.041 },
                { aspectRatio: 1.75, supNeg: 0.060, spanPos: 0.045 },
                { aspectRatio: 2.0, supNeg: 0.065, spanPos: 0.049 },
            ]
        };
        this.osed = {
            longNeg: 0.037,
            longPos: 0.028,
            spanCoeff: [
                { aspectRatio: 1, supNeg: 0.037, spanPos: 0.028 },
                { aspectRatio: 1.1, supNeg: 0.043, spanPos: 0.032 },
                { aspectRatio: 1.2, supNeg: 0.048, spanPos: 0.036 },
                { aspectRatio: 1.3, supNeg: 0.051, spanPos: 0.039 },
                { aspectRatio: 1.4, supNeg: 0.055, spanPos: 0.041 },
                { aspectRatio: 1.5, supNeg: 0.057, spanPos: 0.044 },
                { aspectRatio: 1.75, supNeg: 0.064, spanPos: 0.048 },
                { aspectRatio: 2.0, supNeg: 0.068, spanPos: 0.052 },
            ]
        };
        this.oled={
            longNeg: 0.037,
            longPos: 0.028,
            spanCoeff:[
                { aspectRatio: 1, supNeg: 0.037, spanPos: 0.028 },
                { aspectRatio: 1.1, supNeg: 0.044, spanPos: 0.033 },
                { aspectRatio: 1.2, supNeg: 0.052, spanPos: 0.039 },
                { aspectRatio: 1.3, supNeg: 0.057, spanPos: 0.044 },
                { aspectRatio: 1.4, supNeg: 0.063, spanPos: 0.047 },
                { aspectRatio: 1.5, supNeg: 0.067, spanPos: 0.051 },
                { aspectRatio: 1.75, supNeg: 0.077, spanPos: 0.059 },
                { aspectRatio: 2.0, supNeg: 0.085, spanPos: 0.065 },

            ]
        };
        this.taed={
            longNeg: 0.047,
            longPos: 0.035,
            spanCoeff: [
                { aspectRatio: 1.0, supNeg: 0.047, spanPos: 0.035 },
                { aspectRatio: 1.1, supNeg: 0.053, spanPos: 0.040 },
                { aspectRatio: 1.2, supNeg: 0.060, spanPos: 0.045 },
                { aspectRatio: 1.3, supNeg: 0.065, spanPos: 0.049 },
                { aspectRatio: 1.4, supNeg: 0.071, spanPos: 0.053 },
                { aspectRatio: 1.5, supNeg: 0.075, spanPos: 0.056 },
                { aspectRatio: 1.75, supNeg: 0.084, spanPos: 0.063 },
                { aspectRatio: 2.0, supNeg: 0.091, spanPos: 0.069 },
            ]
        };
        this.tsed={
            longNeg: 0,
            longPos: 0.035,
            spanCoeff:[
                { aspectRatio: 1.0, supNeg: 0.045, spanPos: 0.035 },
                { aspectRatio: 1.1, supNeg: 0.049, spanPos: 0.037 },
                { aspectRatio: 1.2, supNeg: 0.052, spanPos: 0.040 },
                { aspectRatio: 1.3, supNeg: 0.056, spanPos: 0.043 },
                { aspectRatio: 1.4, supNeg: 0.059, spanPos: 0.044 },
                { aspectRatio: 1.5, supNeg: 0.060, spanPos: 0.045 },
                { aspectRatio: 1.75, supNeg: 0.065, spanPos: 0.049 },
                { aspectRatio: 2.0, supNeg: 0.069, spanPos: 0.052 },
            ]
        };
        this.tled={
            longNeg: 0.045,
            longPos: 0.035,
            spanCoeff:[
                { aspectRatio: 1.0, supNeg: 0.000, spanPos: 0.035 },
                { aspectRatio: 1.1, supNeg: 0.000, spanPos: 0.043 },
                { aspectRatio: 1.2, supNeg: 0.000, spanPos: 0.051 },
                { aspectRatio: 1.3, supNeg: 0.000, spanPos: 0.057 },
                { aspectRatio: 1.4, supNeg: 0.000, spanPos: 0.063 },
                { aspectRatio: 1.5, supNeg: 0.000, spanPos: 0.068 },
                { aspectRatio: 1.75, supNeg: 0.000, spanPos: 0.080 },
                { aspectRatio: 2.0, supNeg: 0.000, spanPos: 0.088 },
            ]
        };
        this.tedl={
            longNeg: 0,
            longPos: 0.043,
            spanCoeff: [
                { aspectRatio: 1.0, supNeg: 0.057, spanPos: 0.043 },
                { aspectRatio: 1.1, supNeg: 0.064, spanPos: 0.048 },
                { aspectRatio: 1.2, supNeg: 0.071, spanPos: 0.053 },
                { aspectRatio: 1.3, supNeg: 0.076, spanPos: 0.057 },
                { aspectRatio: 1.4, supNeg: 0.080, spanPos: 0.060 },
                { aspectRatio: 1.5, supNeg: 0.084, spanPos: 0.064 },
                { aspectRatio: 1.75, supNeg: 0.091, spanPos: 0.069 },
                { aspectRatio: 2.0, supNeg: 0.097, spanPos: 0.073 },
            ]
        };
        this.teds={
            longNeg: 0.057,
            longPos: 0.043,
            spanCoeff: [
                { aspectRatio: 1.0, supNeg: 0.000, spanPos: 0.043 },
                { aspectRatio: 1.1, supNeg: 0.000, spanPos: 0.051 },
                { aspectRatio: 1.2, supNeg: 0.000, spanPos: 0.059 },
                { aspectRatio: 1.3, supNeg: 0.000, spanPos: 0.065 },
                { aspectRatio: 1.4, supNeg: 0.000, spanPos: 0.071 },
                { aspectRatio: 1.5, supNeg: 0.000, spanPos: 0.076 },
                { aspectRatio: 1.75, supNeg: 0.000, spanPos: 0.087 },
                { aspectRatio: 2.0, supNeg: 0.000, spanPos: 0.096 },

            ]
        };
        this.fed={
            longNeg: 0,
            longPos:0.056,
            spanCoeff:[
                { aspectRatio: 1.0, supNeg: 0.000, spanPos: 0.056 },
                { aspectRatio: 1.1, supNeg: 0.000, spanPos: 0.064 },
                { aspectRatio: 1.2, supNeg: 0.000, spanPos: 0.072 },
                { aspectRatio: 1.3, supNeg: 0.000, spanPos: 0.079 },
                { aspectRatio: 1.4, supNeg: 0.000, spanPos: 0.085 },
                { aspectRatio: 1.5, supNeg: 0.000, spanPos: 0.089 },
                { aspectRatio: 1.75, supNeg: 0.000, spanPos: 0.100 },
                { aspectRatio: 2.0, supNeg: 0.000, spanPos: 0.107 },
            ]
        };


        
    }

    getCoefficient(aspectRatio, spanType) {
        const spanTypes = ['ip', 'osed', 'oled', 'taed', 'tsed', 'tled', 'tedl', 'teds', 'fed'];
        
        // Check if the provided span type is valid
        if (!spanTypes.includes(spanType)) {
            return `Error: Invalid span type '${spanType}'`;
        }

        const spanObject = this[spanType];

        // Find the two closest aspect ratios for interpolation
        let lowerCoeff = null;
        let upperCoeff = null;

        for (let i = 0; i < spanObject.spanCoeff.length - 1; i++) {
            const current = spanObject.spanCoeff[i];
            const next = spanObject.spanCoeff[i + 1];

            if (aspectRatio >= current.aspectRatio && aspectRatio <= next.aspectRatio) {
                lowerCoeff = current;
                upperCoeff = next;
                break;
            }
        }

        if (!lowerCoeff || !upperCoeff) {
            return `Error: Aspect ratio ${aspectRatio} is out of bounds or no interpolation found.`;
        }

        // Perform linear interpolation for both supNeg and spanPos
        const interpolate = (x, x0, x1, y0, y1) => {
            return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
        };

        const supNegInterpolated = interpolate(aspectRatio, lowerCoeff.aspectRatio, upperCoeff.aspectRatio, lowerCoeff.supNeg, upperCoeff.supNeg);
        const spanPosInterpolated = interpolate(aspectRatio, lowerCoeff.aspectRatio, upperCoeff.aspectRatio, lowerCoeff.spanPos, upperCoeff.spanPos);

        // Return the interpolated values
        return {
            aspectRatio,
            supNeg: supNegInterpolated.toFixed(4),
            spanPos: spanPosInterpolated.toFixed(4),
            longNeg:spanObject.longNeg.toFixed(4),
            longPos:spanObject.longPos.toFixed(4)
        };
    }

    
}

// Example usage:
//const slab = new SlabDesign();
//const coeff = slab.getCoeffByAspectRatio(1.1);
//console.log(coeff); // Outputs: { aspectRatio: 1.1, supNeg: 0.037, spanPos: 0.028 }

