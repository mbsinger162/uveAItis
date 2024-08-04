// utils/sunCriteria.ts

const sunCriteria = [
    {
        "diagnosis": "Cytomegalovirus Anterior Uveitis",
        "inclusion_criteria": "1. Evidence of anterior uveitis\n a. anterior chamber cells\n b. if anterior vitreous cells are present, anterior chamber inflammation should be present\n c. no evidence of retinitis\nAND\n2. Evidence of cytomegalovirus infection in the eye\n a. Positive PCR* for cytomegalovirus on aqueous specimen",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test \n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n3.\tAqueous specimen PCR positive for herpes simplex virus or varicella zoster virus\nCriteria\n1. Evidence of anterior uveitis\n a. anterior chamber cells\n b. if anterior vitreous cells are present, anterior chamber inflammation should be present\n c. no evidence of retinitis\nAND\n2. Evidence of cytomegalovirus infection in the eye\n a. Positive PCR* for cytomegalovirus on aqueous specimen",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for cytomegalovirus anterior uveitis. Am J Ophthalmol 2021;228:89-95"
    },
    {
        "diagnosis": "Herpes Simplex Anterior Uveitis",
        "inclusion_criteria": "Criteria\n1. Evidence of anterior uveitis\n a. anterior chamber cells\n b. if anterior vitreous cells are present, severity is less than anterior chamber inflammation\n c. no evidence of retinitis\nAND\n2. Unilateral uveitis (unless there is a positive aqueous PCR* for herpes simplex virus)\nAND\n3. Evidence of herpes simplex infection in the eye\n a. aqueous humor PCR positive for herpes simplex virus OR\n b. sectoral iris atrophy in a patient <50 years of age OR\n c. herpes simplex keratitis",
        "exclusion_criteria": "1.\tConcomitant dermatomal/cutaneous varicella zoster virus (unless aqueous specimen PCR positive for herpes simplex virus)\n2.\tPositive serology for syphilis using a treponemal test \n3.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n4.\tAqueous specimen PCR positive for cytomegalovirus or varicella zoster virus",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for herpes simplex virus anterior uveitis. Am J Ophthalmol 2021;228:231-6"
    },
    {
        "diagnosis": "Varicella Zoster Virus Anterior Uveitis",
        "inclusion_criteria": "Criteria\n1. Evidence of anterior uveitis\n a. anterior chamber cells\n b. if anterior vitreous cells are present, severity is less than anterior chamber inflammation\n c. no evidence of retinitis\nAND\n2. Unilateral uveitis (unless there is a positive aqueous PCR* for varicella zoster virus)\nAND\n3. Evidence of varicella zoster virus infection in the eye\n a. aqueous humor PCR positive for varicella zoster virus OR\n b. sectoral iris atrophy in a patient > 60 years of age OR\n c. concurrent or recent dermatomal Herpes zoster",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test \n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n3.\tAqueous specimen PCR positive for cytomegalovirus or herpes simplex virus",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for varicella zoster virus anterior uveitis. Am J Ophthalmol 2021;228:165-73"
    },
    {
        "diagnosis": "Fuchs Uveitis Syndrome",
        "inclusion_criteria": "Criteria\n1. Evidence of anterior uveitis\n a. anterior chamber cells\n b. if vitreous cells are present, anterior chamber inflammation also should be present\n c. no evidence of active retinitis\nAND\n2. Unilateral uveitis \nAND\n3. Evidence of Fuchs uveitis syndrome\n a. heterochromia OR\n b. unilateral diffuse iris atrophy AND stellate keratic precipitates \nAND \n4. NEITHER endotheliitis nor nodular, coin-shaped endothelial lesions",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test\n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n3.\tAqueous specimen PCR positive for cytomegalovirus, herpes simplex virus or varicella zoster virus",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for Fuchs Uveitis Syndrome. Am J Ophthalmol 2021;228:262-7"
    },
    {
        "diagnosis": "Juvenile Idiopathic Arthritis-associated Chronic Anterior Uveitis",
        "inclusion_criteria": "Criteria\n1. Evidence of anterior uveitis\n a. anterior chamber cells\n b. if anterior vitreous cells are present, severity is less than anterior chamber inflammation\nAND \n2. Chronic anterior uveitis or, if at initial diagnosis, uveitis is of insidious onset and asymptomatic/ minimally symptomatic\nAND\n3. Juvenile idiopathic arthritis of the following subtypes*\n a. Oligoarthritis, persistent or extended, OR\n b. Rheumatoid factor negative polyarthritis, OR\n c. Juvenile psoriatic arthritis, other than psoriatic spondylitis",
        "exclusion_criteria": "1.\tEnthesitis-related arthritis\n2.\tPositive serologic test for syphilis using a treponemal test\n3.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata) or other granulomatous disease (e.g. familial juvenile systemic granulomatosis)19-22\n4.\tAqueous specimen PCR positive for cytomegalovirus, herpes simplex virus, or varicella zoster virus",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for juvenile idiopathic arthritis-associated chronic anterior uveitis. Am J Ophthalmol 2021;228:192-7"
    },
    {
        "diagnosis": "Spondyloarthritis/HLA-B27-associated Anterior Uveitis",
        "inclusion_criteria": "Criteria \n1. Evidence of anterior uveitis\n a. anterior chamber cells\n b. if anterior vitreous cells are present, severity is less than anterior chamber inflammation\nAND either (both #2 and #3) OR #4\n2. Characteristic uveitis course \na.\tAcute or recurrent acute, unilateral or unilateral alternating course OR\nb.\tChronic course with a history of a recurrent acute, unilateral or unilateral alternating course evolving into chronic course \nAND \n3.\tASAS-defined spondyloarthritis (axial or peripheral)* and/or HLA-B27-positive \nOR\n4.\tChronic uveitis with both ASAS-defined spondyloarthritis (axial or peripheral) AND HLA-B27-positive",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test\n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n3.\tAqueous specimen PCR\u2020 positive for cytomegalovirus, Herpes simplex virus or Varicella zoster virus",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for spondyloarthritis/HLA-B27-associated anterior uveitis. Am J Ophthalmol 2021;228:117-25"
    },
    {
        "diagnosis": "Tubulointerstitial Nephritis with Uveitis Syndrome",
        "inclusion_criteria": "Criteria\n1. Evidence of anterior uveitis\na.\tanterior chamber cells\nb.\tif vitritis or choroiditis or retinal vascular changes are present, anterior chamber inflammation also should be present\nAND\n2. Evidence of tubulointerstitial nephritis, either\na.\tPositive renal biopsy OR\nb.\tElevated urine \u03b2-microglobulin and either abnormal urine analysis or elevated serum creatinine",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test \n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for tubulointerstitial nephritis with uveitis syndrome. Am J Ophthalmol 2021;228:255-61"
    },
    {
        "diagnosis": "Multiple Sclerosis-associated Intermediate Uveitis",
        "inclusion_criteria": "Criteria\n1. Evidence of intermediate uveitis\n a. vitreous cells AND/OR vitreous haze\n b. if anterior chamber cells are present, anterior chamber inflammation less than vitreous \n c. no evidence of retinitis or choroiditis\nAND\n2. Evidence of multiple sclerosis using the Revised McDonald Diagnostic Criteria*",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test\n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n3.\tPositive serology for Lyme disease, either IgG or IgM (e.g. positive ELISA AND Western blot with requisite number of bands for assay used)",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for multiple sclerosis-associated Intermediate Uveitis. Am J Ophthalmol 2021;228:72-9"
    },
    {
        "diagnosis": "Pars Planitis",
        "inclusion_criteria": "Criteria\n1. Evidence of intermediate uveitis\na.\tvitreous cells AND/OR vitreous haze\nb.\tif anterior chamber cells are present, anterior chamber inflammation severity less than vitreous severity\nc.\tno evidence of retinitis or choroiditis\nd.\tno retinal vascular occlusion in posterior pole & mid-periphery\nAND\n2. Evidence of pars planitis\na.\tvitreous snowballs OR pars plana snowbanks",
        "exclusion_criteria": "1.\tMultiple sclerosis, defined by the McDonald criteria28\n2.\tPositive serology for syphilis using a treponemal test\n3.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n4.\tPositive serology for Lyme disease, either IgG or IgM (e.g. positive ELISA AND Western blot with requisite number of bands for assay used)",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for pars planitis. Am J Ophthalmol 2021;228:268-74"
    },
    {
        "diagnosis": "Intermediate Uveitis, Non-Pars Planitis Type",
        "inclusion_criteria": "Criteria\n1. Evidence of intermediate uveitis\na.\tvitreous cells AND/OR vitreous haze\nb.\tif anterior chamber cells are present, anterior chamber inflammation less than vitreous \nc.\tno evidence of retinitis\nAND\n2. No evidence of pars planitis\na.\tNEITHER snowballs NOR snowbanks",
        "exclusion_criteria": "1.\tMultiple sclerosis, defined by the McDonald criteria28\n2.\tPositive serology for syphilis using a treponemal test\n3.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n4.\tPositive serology for Lyme disease, either IgG or IgM (e.g. positive ELISA AND Western blot with requisite number of bands for assay used)\n5.\tEvidence of intraocular lymphoma on diagnostic vitrectomy",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for intermediate uveitis, non-pars planitis type. Am J Ophthalmol 2021;228:159-64"
    },
    {
        "diagnosis": "Acute Posterior Multifocal Placoid Pigment Epitheliopathy",
        "inclusion_criteria": "Criteria\nPaucifocal or multifocal choroidal lesions on clinical examination with \n1.\tPlaque-like or placoid appearance to the lesions\nAND\n2.\tCharacteristic fluorescein angiogram in the acute phase of the disease (lesions are hypofluorescent early and diffusely hyperfluorescent late)",
        "exclusion_criteria": "1.\tPositive serologic test for syphilis using a treponemal test\n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for acute posterior multifocal placoid pigment epitheliopathy. Am J Ophthalmol 2021;228:174-81"
    },
    {
        "diagnosis": "Birdshot Chorioretinitis",
        "inclusion_criteria": "Criteria ([#\u2019s 1, 2, and 3] OR # 4)\n1. Characteristic bilateral multifocal choroiditis on ophthalmoscopy \na.\tMultifocal cream-colored or yellow-orange, oval or round choroidal lesions (\u201cbirdshot spots\u201d)\nAND \n2. Absent to mild anterior chamber inflammation \na.\tAbsent to mild anterior chamber cells AND \nb.\tNo keratic precipitates AND\nc.\tNo posterior synechiae\nAND\n3. Absent to moderate vitritis \nOR\n4.\tMultifocal choroiditis with \na.\tPositive HLA-A29 test AND either (b. or c.)\nb.\tCharacteristic \u201cbirdshot\u201d spots (multifocal cream-colored or yellow-orange, oval or round choroidal lesions) on ophthalmoscopy OR\nc.\tCharacteristic indocyanine green angiogram (multifocal hypofluorescent spots) without characteristic \u201cbirdshot\u201d spots on ophthalmoscopy",
        "exclusion_criteria": "1.\tPositive serologic test for syphilis using a treponemal test\n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)*\n3.\tEvidence of intraocular lymphoma on diagnostic vitrectomy or tissue biopsy",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for birdshot chorioretinitis. Am J Ophthalmol 2021;228:65-71"
    },
    {
        "diagnosis": "Multiple Evanescent White Dot Syndrome",
        "inclusion_criteria": "Criteria\n1. Multifocal chorioretinal gray-white spots with foveal granularity \nAND\n2. Characteristic fluorescein angiogram or optical coherence tomogram (OCT)\na.\t\u201cWreath-like\u201d hyperfluorescent lesions on fluorescein angiogram OR\nb.\tHyper-reflective lesions on OCT extending from the retinal pigment epithelium, into and/or through the ellipsoid zone into the outer nuclear layer of the retina\nAND\n3. Absent to mild anterior chamber and vitreous inflammation",
        "exclusion_criteria": "1.\tPositive serologic test for syphilis using a treponemal test\n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n3.\tBilateral simultaneous disease onset",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for multiple evanescent white dot syndrome. Am J Ophthalmol 2021;228:198-204"
    },
    {
        "diagnosis": "Multifocal Choroiditis with Panuveitis",
        "inclusion_criteria": "Criteria\n1. Multifocal choroiditis with \na.\tOval or round lesions AND\nb.\tPredominant lesion size >125 \u00b5m \nAND\n2. Characteristic appearance\na.\t\u201cPunched-out atrophic\u201d chorioretinal scars OR\nb.\tActive lesions with more than minimal vitreous inflammation\nAND\n3.\tInflammatory lesions and/or characteristic scars involving the mid-periphery or periphery with or without posterior pole involvement",
        "exclusion_criteria": "1.\tPositive serologic test for syphilis using a treponemal test\n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n3.\tIn tuberculosis-endemic regions or tuberculosis-exposed individuals*, evidence of infection with Mycobacterium tuberculosis\na.\tHistologically- or microbiologically-confirmed infection with M. tuberculosis\u2020 OR\nb.\tPositive interferon-\u0194 release assay (IGRA)\u2021 OR\nc.\tPositive tuberculin skin test\u00a7\n*Testing not needed in tuberculosis non-endemic regions. \u2020E.g. biopsy, fluorochrome stain, culture, or polymerase chain reaction based assay. \u2021E.g. Quantiferon-gold or T-spot. \u00a7E.g. purified protein derivative; a positive result should be >10 mm induration",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for multifocal choroiditis with panuveitis. Am J Ophthalmol 2021;228:152-8"
    },
    {
        "diagnosis": "Punctate Inner Choroiditis",
        "inclusion_criteria": "Criteria\n1. Multifocal choroidal inflammatory lesions\na.\tPredominant lesion size <250 \u00b5m AND \nb.\tPunctate lesion appearance\nAND\n2. Lesion involvement of posterior pole with or without mid-periphery\nAND\n3. Absent to minimal anterior chamber and vitreous inflammation",
        "exclusion_criteria": "1.\tPositive serologic test for syphilis using a treponemal test\n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for punctate inner choroiditis. Am J Ophthalmol 2021;228:275-80"
    },
    {
        "diagnosis": "Serpiginous Choroiditis",
        "inclusion_criteria": "Criteria\n1. Paucifocal or multifocal choroiditis with an ameboid or serpentine shape*\nAND\n2. Characteristic imaging\na.\tFluorescein angiogram with early diffuse hypofluorescent lesions and late hyperfluorescent lesion borders OR\nb.\tFundus auto-fluorescence with hypo-autofluorescent lesions with hyper-autofluorescent borders\nAND\n3. Absent to minimal anterior chamber and vitreous inflammation",
        "exclusion_criteria": "1.\tPositive serologic test for syphilis using a treponemal test\n2.\tEvidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n3.\tEvidence of infection with Mycobacterium tuberculosis, either\na.\tHistologically- or microbiologically-confirmed infection with M. tuberculosis\u2020 OR\nb.\tPositive interferon-\u0194 release assay (IGRA)\u2021 OR\nc.\tPositive tuberculin skin test\u00a7 \n *Lesions do not need to be contiguous with the optic disc. \u2020E.g. biopsy, fluorochrome stain, culture, or polymerase chain reaction based assay. \u2021E.g. Quantiferon-gold or T-spot. \u00a7E.g. purified protein derivative; a positive result should be >10 mm induration.",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for serpiginous choroiditis. Am J Ophthalmol 2021;228:126-33"
    },
    {
        "diagnosis": "Beh\u00e7et Disease Uveitis",
        "inclusion_criteria": "Criteria\n1. Compatible uveitic syndrome \na.\tAnterior uveitis\nb.\tAnterior and intermediate uveitis\nc.\tPosterior uveitis with retinal vasculitis and/or focal retinal infiltrates*\nd.\tPanuveitis with retinal vasculitis and/or focal retinal infiltrates*\nAND\n2. A diagnosis of Beh\u00e7et disease using International Study Group for Beh\u00e7et Disease criteria\u2020",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test\n2.\tEvidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n*Posterior uveitis or panuveitis with a choroiditis is not a Beh\u00e7et disease compatible uveitis. \n\u2020See also: International Study Group for Beh\u00e7et\u2019s Disease. Criteria for diagnosis of Beh\u00e7et\u2019s disease Lancet 1990;335:1078-80.",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for Beh\u00e7et disease uveitis. Am J Ophthalmol 2021;228:80-8"
    },
    {
        "diagnosis": "Sarcoidosis-Associated Uveitis",
        "inclusion_criteria": "Criteria\n1. Compatible uveitic picture, either\na.\tAnterior uveitis OR\nb.\tIntermediate or anterior/intermediate uveitis OR\nc.\tPosterior uveitis with either choroiditis (paucifocal choroidal nodule(s) or multifocal choroiditis) OR\nd.\tPanuveitis with choroiditis or retinal vascular sheathing or retinal vascular occlusion\nAND\n2. Evidence of sarcoidosis, either \na.\tTissue biopsy demonstrating non-caseating granulomata OR \nb.\tBilateral hilar adenopathy on chest imaging",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test \n2.\tEvidence of infection with Mycobacterium tuberculosis,* either \na.\tHistologically- or microbiologically-confirmed infection with M. tuberculosis\u2020 OR\nb.\tPositive interferon-\u0194 release assay (IGRA)\u2021 OR\nc.\tPositive tuberculin skin test\u00a7 \n*Routine exclusion of tuberculosis is not required in areas where tuberculosis is non-endemic but should be performed in areas where tuberculosis is endemic or in tuberculosis-exposed patients. With evidence of latent tuberculosis in a patient with a uveitic syndrome compatible with either sarcoidosis or tubercular uveitis and bilateral hilar adenopathy, the classification as sarcoid uveitis can be made only with biopsy confirmation of sarcoidosis (and therefore exclusion of tuberculosis). \u2020E.g. biopsy, fluorochrome stain, culture, or polymerase chain reaction based assay. \u2021E.g. Quantiferon-gold or T-spot. \u00a7E.g. Purified protein derivative (PPD) skin test; a positive result should be >10 mm induration.",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for sarcoidosis-associated uveitis. Am J Ophthalmol 2021;228:220-230"
    },
    {
        "diagnosis": "Sympathetic Ophthalmia",
        "inclusion_criteria": "Criteria\n1. History of unilateral ocular trauma or surgery\nAND\n2. Ocular inflammation, either \na.\tBilateral OR \nb.\tIf there is no view in the inciting eye (e.g. enucleated, phthisis, opaque cornea), then detectable inflammation in the sympathizing eye\nAND \n3. Evidence of more than isolated anterior uveitis, either\na.\tAnterior chamber and vitreous inflammation OR\nb.\tPanuveitis with choroidal involvement",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test\n2.\tEvidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for sympathetic ophthalmia. Am J Ophthalmol 2021;228:212-9"
    },
    {
        "diagnosis": "Early-Stage Vogt-Koyanagi-Harada Disease",
        "inclusion_criteria": "Criteria (Diagnosis requires #1 or #2 AND #3)\n1. Evidence of Harada\u2019s disease\na.\tSerous (exudative) retinal detachment AND (b. and/or c.)\nb.\tMulti-loculated appearance on fluorescein angiogram OR\nc.\tSeptae on optical coherence tomogram\nOR\n2. Panuveitis* with >2 of the following neurologic symptoms or signs\u2020 \na.\tHeadache OR\nb.\tTinnitus OR\nc.\tDysacusis OR\nd.\tMeningismus OR\ne.\tCerebrospinal fluid pleocytosis\nAND\n3. No history of penetrating ocular trauma or vitreoretinal surgery prior to disease onset",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test\n2.\tEvidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n*Uveitis should have evidence of choroidal involvement on clinical examination, fluorescein angiography, indocyanine green angiography, or optical coherence tomography, including enhanced depth imaging of the choroid. \u2020Onset of neurologic symptoms and signs and onset of the uveitis should occur within 4 weeks of each other.",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for Vogt-Koyanagi-Harada Disease. Am J Ophthalmol 2021;228:205-11"
    },
    {
        "diagnosis": "Late-Stage Vogt-Koyanagi-Harada Disease",
        "inclusion_criteria": "Criteria\n1. History of early-stage Vogt-Koyanagi-Harada disease\nAND (#2 and/or #3)\n2. Sunset glow fundus\nOR\n3. Uveitis* AND >1 of the following cutaneous findings\na.\tVitiligo OR\nb.\tPoliosis OR\nc.\tAlopecia",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test\n2.\tEvidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)\n*Uveitis may be:1) chronic anterior uveitis; 2) anterior and intermediate uveitis; or 3) panuveitis with multifocal choroiditis (\u201cDalen Fuchs-like nodules\u201d)",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for Vogt-Koyanagi-Harada disease. Am J Ophthalmol 2021;228:205-11"
    },
    {
        "diagnosis": "Acute Retinal Necrosis Syndrome",
        "inclusion_criteria": "Criteria \n1. Necrotizing retinitis involving the peripheral retina \nAND (either #2 OR #3)\n2. Evidence of infection with either herpes simplex virus (HSV) or Varicella zoster virus (VZV)\na.\tPositive PCR* for either HSV or VZV from either an aqueous or vitreous specimen\nOR\n3. Characteristic clinical picture\na.\tCircumferential or confluent retinitis AND\nb.\tRetinal vascular sheathing and/or occlusion AND\nc.\tMore than minimal vitritis \u2020",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test\n2.\tIntraocular specimen PCR-positive for cytomegalovirus or Toxoplasma gondii (unless there is immune compromise, morphologic evidence for >1 infection, the characteristic clinical picture of acute retinal necrosis, and the intraocular fluid specimen has a positive PCR for either HSV or VZV)\n* PCR = polymerase chain reaction. HSV = herpes simplex virus. VZV = varicella zoster virus. \u2020Vitritis criterion not required in immunocompromised patients.",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for acute retinal necrosis. Am J Ophthalmol 2021;228: 237-44"
    },
    {
        "diagnosis": "Cytomegalovirus Retinitis",
        "inclusion_criteria": "Criteria (requires #1 and #2 and either #3 or #4)\n1. Necrotizing retinitis with indistinct borders due to numerous small (<50 \u03bcm) satellites \nAND \n2. Immune compromise, either \na.\tSystemic (e.g. AIDS, organ transplant, chemotherapy) OR\nb.\tOcular (e.g. intraocular corticosteroids or chemotherapy)\nAND (#3 or #4)\n3. Characteristic clinical picture ([a. or b. or c.] AND d.)\na.\tWedge-shaped area of retinitis OR\nb.\tHemorrhagic appearance of the retinitis OR\nc.\tGranular appearance of the retinitis AND\nd.\tAbsent to mild vitritis\nOR\n4. Evidence of intraocular infection with cytomegalovirus \na.\tPositive PCR* for cytomegalovirus from either the aqueous or vitreous specimen",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test \n2.\tIntraocular specimen PCR-positive for herpes simplex virus, varicella zoster virus or Toxoplasma gondii (unless there is immune compromise, morphologic evidence for >1 infection, the characteristic picture of cytomegalovirus retinitis, and the intraocular fluid specimen also has a positive PCR for cytomegalovirus)",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for cytomegalovirus retinitis. Am J Ophthalmol 2021;228:245-54"
    },
    {
        "diagnosis": "Syphilitic Uveitis",
        "inclusion_criteria": "Criteria\n1. Uveitis with a compatible uveitic presentation, including\na.\tAnterior uveitis OR\nb.\tIntermediate uveitis or anterior/intermediate uveitis OR\nc.\tPosterior or panuveitis with one of the following presentations\na.\tPlacoid inflammation of the retinal pigment epithelium or\nb.\tMultifocal inflammation of the retina/retinal pigment epithelium or\nc.\tNecrotizing retinitis or\nd.\tRetinal vasculitis\nAND\n2. Evidence of infection with Treponema pallidum, either \na.\tPositive treponemal test and non-treponemal test\nb.\tPositive treponemal test with two different treponemal tests",
        "exclusion_criteria": "1.\tHistory of adequate treatment for syphilitic uveitis*",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for syphilitic uveitis. Am J Ophthalmol 2021;228:182-91"
    },
    {
        "diagnosis": "Toxoplasmic Retinitis",
        "inclusion_criteria": "Criteria\n1. Focal or paucifocal necrotizing retinitis*\nAND (#2 or #3)\n2. Evidence of infection with Toxoplasma gondii\na.\tPositive PCR\u2020 for Toxoplasma gondii from either the aqueous or vitreous specimen OR\nb.\tPositive serum IgM antibodies against Toxoplasma gondii\nOR\n3. Characteristic clinical ocular features\na.\tHyperpigmented and/or atrophic chorioretinal scar (\u201ctoxoplasmic scar\u201d) AND (b. or c.)\nb.\tRound or oval retinitis lesions OR\nc.\tRecurrent acute (episodic) course",
        "exclusion_criteria": "1.\tBoth negative IgG AND IgM antibodies against Toxoplasma gondii (unless there is a positive PCR for Toxoplasma gondii from an aqueous or vitreous specimen)\n2.\tPositive serology for syphilis using a treponemal test\n3.\tIntraocular specimen PCR-positive for herpes simplex virus, varicella zoster virus or cytomegalovirus (unless there is immune compromise, morphologic evidence for >1 infection, the characteristic picture of toxoplasmic retinitis, and the intraocular fluid specimen also has a positive PCR for T. gondii)\n* \u201cActive\u201d retinitis lesions in immunocompetent patients. Immunocompromised patients may have a multifocal retinitis or a diffuse necrotizing retinitis. Number of scars may be >5. \u2020PCR = polymerase chain reaction.",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for toxoplasmic retinitis. Am J Ophthalmol 2021;228:134-41"
    },
    {
        "diagnosis": "Tubercular Uveitis",
        "inclusion_criteria": "Criteria\n1. Evidence of a tubercular uveitis compatible uveitic syndrome\na.\tanterior uveitis with iris nodules\nb.\tserpiginous-like tubercular choroiditis \nc.\tchoroidal nodule (i.e. tuberculoma)\nd.\tin individuals with active systemic tuberculosis, multifocal choroiditis\ne.\tocclusive retinal vasculitis\nAND\n2. Evidence of infection with Mycobacterium tuberculosis, either \na.\thistologically- or microbiologically-confirmed infection with M. tuberculosis* OR\nb.\tpositive interferon-\u03b3 release assay (IGRA)\u2020 OR\nc.\tpositive tuberculin skin test\u2021",
        "exclusion_criteria": "1.\tPositive serology for syphilis using a treponemal test \n2.\tPositive biopsy for sarcoidosis (and therefore an absence of histological or microbiologic confirmation of infection with M. tuberculosis) \n3.\tUveitic syndrome compatible with either sarcoidosis-associated uveitis or tubercular uveitis and bilateral hilar adenopathy on chest imaging without histological or microbiologic confirmation of the diagnosis of infection with M. tuberculosis \u00a7\n*E.g. biopsy, fluorochrome stain, culture, or polymerase chain reaction based assay. \u2020E.g. Quantiferon-gold or T-spot. \u2021E.g. Purified protein derivative (PPD) skin test; a positive result should be >10 mm induration. However, a positive skin test and a negative IGRA should be taken as evidence of atypical mycobacterial infection and not tuberculosis.\n \u00a7In patients with a uveitic syndrome compatible either with sarcoidosis-associated uveitis or with tubercular uveitis, bilateral hilar adenopathy, and evidence of latent tuberculosis (e.g. positive tuberculin skin test or IGRA), the classification requires histological or microbiologic confirmation of the diagnosis (i.e. classification cannot be made without such confirmation).",
        "source": "Standardization of Uveitis Nomenclature (SUN) Working Group. Classification criteria for tubercular uveitis. Am J Ophthalmol 2021;228:142-51"
    }
]
  
  export default sunCriteria;