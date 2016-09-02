export interface ILegislator {
    bioguide_id: string;
    birthday: string;
    chamber: string;
    contact_form: string;
    crp_id: string;
    district: string;
    facebook_id: string;
    fax: string;
    fec_ids: string[];
    first_name: string;
    gender: string;
    govtrack_id: string;
    icpsr_id: number;
    in_office: boolean;
    last_name: string;
    lis_id: string;
    middle_name: string;
    name_suffix: string;
    nickname: string;
    oc_email: string;
    ocd_id: string;
    office: string;
    party: string;
    phone: string;
    senate_class: number;
    state: string;
    state_name: string;
    state_rank: string;
    term_end: string;
    term_start: string;
    thomas_id: string;
    title: string;
    twitter_id: string;
    votesmart_id: number;
    website: string;
    youtube_id: string;
}

export interface ILegislators {
    results: ILegislator[];
    count: number;
    page: {
        count: number;
        per_page: number;
        page: number;
    };
}
