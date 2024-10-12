import React, { useState, useEffect } from 'react';

interface Specification {
    name: string;
    value: string;
}
interface Details {
    images: string[];
    feautures: string[];
    specifications: Specification[];
}

interface PropsDetail {
    name: string;
    description: string;
    details: Details;
}

