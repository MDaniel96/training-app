export class Plan {
    name: string;
    image: string;
    numberOfWeeks: number;
    trainingsPerWeek: number;
    intensity: number;
    focusRateCardio: number;
    focusRateStrength: number;
    equipment: string;
    goal: string;
    howToReach: string;
    weekStructure: { type: string, description: string }[];
}
