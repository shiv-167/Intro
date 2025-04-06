class RCC {
    constructor() {}

    // Calculate the xuLim_ratio based on the yield strength (fy)
    static xuLim_ratio(fy) {
        return parseFloat(700 / (1100 + 0.87 * fy));
    }

    // Calculate the minimum depth for the RCC section
    static DepthMin(b, fck, fy, Mu) {
        let xu = this.xuLim_ratio(fy);
        return Math.sqrt((Mu * 1000000) / (0.36 * fck * b * xu * (1 - 0.416 * xu)));
    }

    // Get the required area of steel (Ast)
    static GetAst(b, d, fck, fy, M) {
        let a = fy / (fck * b); // Area coefficient
        let c = M * 1000000 / (0.87 * fy); // Moment to force ratio
        let _b=-d;
        let delta = _b * _b - 4 * a * c; // Discriminant of the quadratic equation
        if (delta < 0) {
            return 0; // No solution (if the discriminant is negative)
        }
        
        let ast1 = (-_b + Math.sqrt(delta)) / (2 * a); // Calculate the required steel area
        let ast2 = (-_b - Math.sqrt(delta)) / (2 * a); // Calculate the required steel area
        if (ast1 > 0 && ast2 > 0) return Math.min(ast1, ast2);
        else if (ast1 >= 0) return ast1;
        else return ast2;
        
    }
}