class DeflectionCriteria {
    constructor(fy, AstReq, AstProvided, pt, pc, supportCondition = null, Span = null) {
        this.fs = this.getFs(fy, AstReq, AstProvided);
        this.kt = this.getKt(pt);
        this.kc = this.getKc(pc);
        this.pt=pt;

        if (supportCondition !== null && Span !== null) {
            const basicSpanDepthRatio = DeflectionCriteria.SupportCondition[supportCondition];
            if (Span > 10) {
                if (supportCondition === "Cantilever") {
                    throw new Error("Exact Deflection Calculation is required");
                }
                this.basicSpanDepthRatio = (basicSpanDepthRatio * 10) / Span;
            } else {
                this.basicSpanDepthRatio = basicSpanDepthRatio;
            }

            this.dMin = Span / this.basicSpanDepthRatio / this.kt / this.kc;
            this.allowableSpanDepthRatio = Span / this.dMin;
        }
    }

    getKt(pt) {
        return 1.0 / (0.225 + 0.0032 * this.fs - 0.625 * Math.log10(1.0 / pt));
    }

    getKc(pc) {
        return Math.min(1.0 + pc / (pc + 3), 1.5);
    }

    getFs(fy, AstReq, AstProvided) {
        return 0.58 * fy * (AstReq / AstProvided);
    }

    static SupportCondition = {
        SimplySupported: 20,
        Continuous: 26,
        Cantilever: 7
    };
}

// Example usage:
  /*  try {
        const dc = new DeflectionCriteria(
            500,   // fy
            1200,  // AstReq
            1500,  // AstProvided
            0.9,   // pt
            0.8,   // pc
            "Continuous", // supportCondition
            12     // Span (in meters presumably)
        );
        console.log(dc);
    } catch (err) {
        console.error(err.message);
    }*/
