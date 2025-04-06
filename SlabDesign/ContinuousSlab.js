class ContinuousSlab{
    ly;
    lx;
    panelType;    
    slabCoefficients;
    fck;
    fy;
    Mx_Neg;
    Mx_Pos;
    My_Neg;
    My_Pos;
    dl;
    ll;
    factoredLoad;
    dMin;
    Mux;
    Muy;
    Mu;///max moment for depth calculation
    adoptedDepth;

    aspectRatio;
    astReqShort;
    astShortLong;
    astProShort;
    astProLong;
    astX;
    asstY;
    diaShort;
    diaLong;
    pt;
    pc;
    cc;//clear cover 
    ec;//effective cover
    D//overall Depth
    spacingShort;
    spacingLong;
    dfc;///for deflection criteria

    
    constructor(panelType, ly, lx, fck, fy, dl, ll)
    {
        this.panelType=panelType;
        this.ly=ly;
        this.lx=lx;
        this.fck=fck;
        this.fy=fy;
        this.dl=dl;
        this.ll=ll;
        this.factoredLoad=1.5*(dl+ll);
        this.aspectRatio=(ly/lx).toFixed(2);
        this.slabCoefficients=new ContinuousSlabCoeff().getCoefficient(this.aspectRatio,this.panelType);
        this.Mx_Neg=(this.slabCoefficients.supNeg*this.factoredLoad*this.lx*this.lx).toFixed(2);
        this.Mx_Pos=(this.slabCoefficients.spanPos*this.factoredLoad*this.lx*this.lx).toFixed(2);
        this.My_Neg=(this.slabCoefficients.longNeg*this.factoredLoad*this.lx*this.lx).toFixed(2);
        this.My_Pos=(this.slabCoefficients.longPos*this.factoredLoad*this.lx*this.lx).toFixed(2);
        this.Mux=Math.max(this.Mx_Neg,this.Mx_Pos);
        this.Muy=Math.max(this.My_Neg,this.My_Pos);
        this.Mu=Math.max(this.Mux,this.Muy);

        this.dMin = RCC.DepthMin(1000, this.fck, this.fy, this.Mu).toFixed(1);
        this.astX= (RCC.GetAst(1000, this.adoptedDepth, this.fck, this.fy, this.Mux)).toFixed(1);
        this.astY= (RCC.GetAst(1000, this.adoptedDepth, this.fck, this.fy, this.Muy)).toFixed(1);

    }
     
    setDepth(depth)
    {      
        this.adoptedDepth=parseFloat(depth);
        this.astX = RCC.GetAst(1000, this.adoptedDepth, this.fck, this.fy, this.Mux);
        this.astY = RCC.GetAst(1000, this.adoptedDepth, this.fck, this.fy, this.Muy);      


    }
    
    
}