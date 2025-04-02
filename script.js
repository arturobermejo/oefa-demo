const GOOGLE_SHEETS_CONFIG = {
    SPREADSHEET_ID: '__SPREADSHEET_ID__',
    PARAMETROS_SPREADSHEET_ID: '__PARAMETROS_SPREADSHEET_ID__',
    API_KEY: '__GOOGLE_API_KEY__'
};

// Configuración inicial de la aplicación
const APP_CONFIG = {
    initialStep: 1,
    initialSubStep: 1.1,
    initialProgramacionStep: 2.1,
    pageSize: 10
};

// Agregar flag al inicio del archivo después de las configuraciones existentes
const APP_FLAGS = {
    useMockData: false // Set to false to use real API data
};

// Configuración de las hojas
const SHEET_CONFIG = {
    '1.1': {
        name: 'Sinada',
        visibleColumns: ['CODIGO', 'FECHA_DENUNCIA', 'DEPARTAMENTO', 'PROVINCIA', 'DISTRITO', 'ADMINISTRADO', 'ESTADO'],
        filterableColumns: ['DEPARTAMENTO', 'PROVINCIA', 'DISTRITO', 'ESTADO']
    },
    '1.2': {
        name: 'Ospa',
        visibleColumns: ['CODIGO', 'RUC_EFA', 'ESTADO_GENERAL', 'ADMINISTRADO'],
        filterableColumns: ['ESTADO_GENERAL']
    },
    '1.3': {
        name: 'UFAFEMA (Pedido información)',
        visibleColumns: ['CASO COFEMA', 'HT', 'DOCUMENTO RECIBIDO', 'TAREA', 'ADMINISTRADO / INVESTIGADO', 'AREA CONSULTADA'],
        filterableColumns: ['AREA CONSULTADA']
    },
    '1.4': {
        name: 'UFAFEMA (Diligencias)',
        visibleColumns: ['CASO COFEMA', 'HT', 'DOCUMENTO RECIBIDO', 'ADMINISTRADO / INVESTIGADO', 'COORDINACIÓN'],
        filterableColumns: ['COORDINACIÓN']
    },
    '1.5': {
        name: 'Insumos de la EFA',
        visibleColumns: ['Área responsable', 'Agente contaminante', 'Componente ambiental', 'Actividad económica', 'Hechos'],
        filterableColumns: ['Área responsable', 'Componente ambiental', 'Actividad económica']
    }
};

// Datos mockeados
const MOCK_DATA = {
    '1.1': {
        data: [
            ['SIN-2024-001', '2024-01-15', 'Lima', 'Lima', 'Miraflores', 'Empresa A', 'En proceso'],
            ['SIN-2024-002', '2024-01-20', 'Arequipa', 'Arequipa', 'Cercado', 'Empresa B', 'Pendiente'],
            ['SIN-2024-003', '2024-02-01', 'Cusco', 'Cusco', 'Wanchaq', 'Empresa C', 'Completado']
        ],
        headers: ['CODIGO', 'FECHA_DENUNCIA', 'DEPARTAMENTO', 'PROVINCIA', 'DISTRITO', 'ADMINISTRADO', 'ESTADO'],
        filterableColumns: [
            { column: 'DEPARTAMENTO', values: ['Lima', 'Arequipa', 'Cusco'] },
            { column: 'ESTADO', values: ['En proceso', 'Pendiente', 'Completado'] }
        ],
        allHeaders: ['CODIGO', 'FECHA_DENUNCIA', 'DEPARTAMENTO', 'PROVINCIA', 'DISTRITO', 'ADMINISTRADO', 'ESTADO'],
        allData: [
            ['SIN-2024-001', '2024-01-15', 'Lima', 'Lima', 'Miraflores', 'Empresa A', 'En proceso'],
            ['SIN-2024-002', '2024-01-20', 'Arequipa', 'Arequipa', 'Cercado', 'Empresa B', 'Pendiente'],
            ['SIN-2024-003', '2024-02-01', 'Cusco', 'Cusco', 'Wanchaq', 'Empresa C', 'Completado']
        ]
    },
    '1.2': {
        data: [
            ['OSP-2024-001', '20100123456', 'Activo', 'Empresa X'],
            ['OSP-2024-002', '20200789012', 'Inactivo', 'Empresa Y'],
            ['OSP-2024-003', '20300345678', 'Activo', 'Empresa Z']
        ],
        headers: ['CODIGO', 'RUC_EFA', 'ESTADO_GENERAL', 'ADMINISTRADO'],
        filterableColumns: [
            { column: 'ESTADO_GENERAL', values: ['Activo', 'Inactivo'] }
        ],
        allHeaders: ['CODIGO', 'RUC_EFA', 'ESTADO_GENERAL', 'ADMINISTRADO'],
        allData: [
            ['OSP-2024-001', '20100123456', 'Activo', 'Empresa X'],
            ['OSP-2024-002', '20200789012', 'Inactivo', 'Empresa Y'],
            ['OSP-2024-003', '20300345678', 'Activo', 'Empresa Z']
        ]
    },
    '1.3': {
        data: [
            ['COF-2024-001', 'HT-001', 'DOC-001', 'Revisión', 'Empresa D', 'Área Legal'],
            ['COF-2024-002', 'HT-002', 'DOC-002', 'Evaluación', 'Empresa E', 'Área Técnica'],
            ['COF-2024-003', 'HT-003', 'DOC-003', 'Informe', 'Empresa F', 'Área Administrativa']
        ],
        headers: ['CASO COFEMA', 'HT', 'DOCUMENTO RECIBIDO', 'TAREA', 'ADMINISTRADO / INVESTIGADO', 'AREA CONSULTADA'],
        filterableColumns: [
            { column: 'AREA CONSULTADA', values: ['Área Legal', 'Área Técnica', 'Área Administrativa'] }
        ],
        allHeaders: ['CASO COFEMA', 'HT', 'DOCUMENTO RECIBIDO', 'TAREA', 'ADMINISTRADO / INVESTIGADO', 'AREA CONSULTADA'],
        allData: [
            ['COF-2024-001', 'HT-001', 'DOC-001', 'Revisión', 'Empresa D', 'Área Legal'],
            ['COF-2024-002', 'HT-002', 'DOC-002', 'Evaluación', 'Empresa E', 'Área Técnica'],
            ['COF-2024-003', 'HT-003', 'DOC-003', 'Informe', 'Empresa F', 'Área Administrativa']
        ]
    },
    '1.4': {
        data: [
            ['COF-2024-004', 'HT-004', 'DOC-004', 'Empresa G', 'Norte'],
            ['COF-2024-005', 'HT-005', 'DOC-005', 'Empresa H', 'Sur'],
            ['COF-2024-006', 'HT-006', 'DOC-006', 'Empresa I', 'Centro']
        ],
        headers: ['CASO COFEMA', 'HT', 'DOCUMENTO RECIBIDO', 'ADMINISTRADO / INVESTIGADO', 'COORDINACIÓN'],
        filterableColumns: [
            { column: 'COORDINACIÓN', values: ['Norte', 'Sur', 'Centro'] }
        ],
        allHeaders: ['CASO COFEMA', 'HT', 'DOCUMENTO RECIBIDO', 'ADMINISTRADO / INVESTIGADO', 'COORDINACIÓN'],
        allData: [
            ['COF-2024-004', 'HT-004', 'DOC-004', 'Empresa G', 'Norte'],
            ['COF-2024-005', 'HT-005', 'DOC-005', 'Empresa H', 'Sur'],
            ['COF-2024-006', 'HT-006', 'DOC-006', 'Empresa I', 'Centro']
        ]
    }
};

// Datos mockeados para las listas de selección de parámetros
const MOCK_PARAMETROS_LISTAS = {
    areasResponsables: [
        'Dirección de Supervisión Ambiental en Energía y Minas',
        'Dirección de Supervisión Ambiental en Actividades Productivas',
        'Dirección de Supervisión Ambiental en Infraestructura y Servicios',
        'Dirección de Evaluación Ambiental',
        'Dirección de Fiscalización y Aplicación de Incentivos'
    ],
    agentesContaminantes: [
        'Residuos sólidos peligrosos',
        'Residuos sólidos no peligrosos',
        'Efluentes industriales',
        'Efluentes domésticos',
        'Emisiones atmosféricas',
        'Material particulado',
        'Ruido',
        'Radiaciones no ionizantes',
        'Vibraciones'
    ],
    componentesAmbientales: [
        'Agua',
        'Aire',
        'Suelo',
        'Flora',
        'Fauna',
        'Paisaje',
        'Población'
    ],
    subcomponentesAmbientales: [
        'Agua superficial continental',
        'Agua superficial marina',
        'Agua subterránea',
        'Calidad del aire',
        'Suelo agrícola',
        'Suelo urbano',
        'Suelo industrial',
        'Flora terrestre',
        'Flora acuática',
        'Fauna terrestre',
        'Fauna acuática'
    ],
    actividadesEconomicas: [
        'Minería',
        'Hidrocarburos',
        'Electricidad',
        'Pesca',
        'Industria manufacturera',
        'Agricultura',
        'Residuos sólidos',
        'Saneamiento'
    ],
    actividadesDependencias: {
        'Minería': [
            'Minería metálica - Gran y mediana minería',
            'Minería no metálica',
            'Pequeña minería',
            'Minería artesanal',
            'Beneficio de minerales'
        ],
        'Hidrocarburos': [
            'Exploración de hidrocarburos',
            'Explotación de hidrocarburos',
            'Refinación de petróleo',
            'Transporte de hidrocarburos',
            'Distribución de gas natural'
        ],
        'Electricidad': [
            'Generación térmica',
            'Generación hidroeléctrica',
            'Generación con energías renovables',
            'Transmisión eléctrica',
            'Distribución eléctrica'
        ],
        'Pesca': [
            'Procesamiento pesquero industrial',
            'Acuicultura de mayor escala',
            'Acuicultura de menor escala',
            'Procesamiento artesanal'
        ],
        'Industria manufacturera': [
            'Industria cementera',
            'Industria papelera',
            'Industria textil',
            'Industria metalúrgica',
            'Industria química'
        ]
    },
    etapasActividad: [
        'Planificación',
        'Construcción',
        'Operación',
        'Mantenimiento',
        'Cierre',
        'Post-cierre',
        'Abandono'
    ],
    factoresAsociados: [
        'Clima',
        'Geografía',
        'Accesibilidad',
        'Población vulnerable',
        'Áreas naturales protegidas',
        'Zonas arqueológicas',
        'Comunidades nativas',
        'Comunidades campesinas',
        'Infraestructura crítica',
        'Tecnología disponible'
    ]
};

// Datos mockeados para la tabla de parámetros
const MOCK_PARAMETROS_DATA = {
    headers: ['Área responsable', 'Agente contaminante', 'Componente ambiental', 'Actividad económica', 'Hechos'],
    data: [
        ['Dirección de Supervisión Ambiental', 'Residuos sólidos', 'Suelo', 'Minería', 'Disposición inadecuada de residuos'],
        ['Dirección de Evaluación Ambiental', 'Efluentes', 'Agua', 'Hidrocarburos', 'Vertimiento sin tratamiento'],
        ['Dirección de Fiscalización', 'Emisiones atmosféricas', 'Aire', 'Industria', 'Emisiones fuera de LMP']
    ],
    filterableColumns: [
        { column: 'Área responsable', values: ['Dirección de Supervisión Ambiental', 'Dirección de Evaluación Ambiental', 'Dirección de Fiscalización'] },
        { column: 'Componente ambiental', values: ['Suelo', 'Agua', 'Aire'] },
        { column: 'Actividad económica', values: ['Minería', 'Hidrocarburos', 'Industria'] }
    ],
    allHeaders: ['Área responsable', 'Agente contaminante', 'Componente ambiental', 'Subcomponente ambiental', 
                'Actividad económica', 'Subactividad económica', 'Etapa actividad', 'Factor asociado', 'Hechos'],
    allData: [
        ['Dirección de Supervisión Ambiental', 'Residuos sólidos', 'Suelo', 'Suelo agrícola', 'Minería', 'Minería metálica', 'Operación', 'Tecnología', 'Disposición inadecuada de residuos'],
        ['Dirección de Evaluación Ambiental', 'Efluentes', 'Agua', 'Agua superficial', 'Hidrocarburos', 'Exploración', 'Construcción', 'Geografía', 'Vertimiento sin tratamiento'],
        ['Dirección de Fiscalización', 'Emisiones atmosféricas', 'Aire', 'Calidad del aire', 'Industria', 'Refinación', 'Mantenimiento', 'Infraestructura', 'Emisiones fuera de LMP']
    ]
};

// Datos mockeados para subsectores y meses
const MOCK_SUBSECTORES = [
    'Minería metálica',
    'Minería no metálica',
    'Hidrocarburos líquidos',
    'Hidrocarburos gaseosos',
    'Electricidad',
    'Pesca industrial',
    'Acuicultura',
    'Industria manufacturera'
];

const MOCK_MESES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

// Función para codificar el nombre de la hoja para la URL
function encodeSheetName(sheetName) {
    return encodeURIComponent(sheetName).replace(/'/g, '%27').replace(/!/g, '%21');
}

// Función para obtener datos de una hoja específica
async function getSheetData(sheetName) {
    try {
        console.log(`Intentando cargar datos de la hoja: ${sheetName}`);
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID}/values/${sheetName}?key=${GOOGLE_SHEETS_CONFIG.API_KEY}&majorDimension=ROWS`;
        
        console.log('URL de la API:', url);
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error en la respuesta:', errorData);
            throw new Error(`Error al cargar datos: ${response.status} - ${errorData.error?.message || 'Error desconocido'}`);
        }
        
        const data = await response.json();
        console.log('Datos recibidos:', data);
        
        if (!data.values || !Array.isArray(data.values)) {
            throw new Error('Formato de datos inválido recibido de la API');
        }
        
        return data.values;
    } catch (error) {
        console.error(`Error al cargar datos de ${sheetName}:`, error);
        return [];
    }
}

// Función para procesar los datos de una hoja
function processSheetData(rawData, sheetKey) {
    if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
        console.warn(`No hay datos válidos para la hoja ${sheetKey}`);
        return null;
    }

    const headers = rawData[0];
    if (!headers || !Array.isArray(headers)) {
        console.warn(`Formato de encabezados inválido para la hoja ${sheetKey}`);
        return null;
    }

    const data = rawData.slice(1);
    
    // Obtener columnas filtrables según la configuración
    const filterableColumns = SHEET_CONFIG[sheetKey]?.filterableColumns || [];
    
    // Obtener valores únicos para cada columna filtrable
    const filterValues = filterableColumns.map(column => {
        const columnIndex = headers.indexOf(column);
        if (columnIndex === -1) return null;
        
        const values = [...new Set(data.map(row => row[columnIndex]))].filter(Boolean).sort();
        return {
            column,
            values
        };
    }).filter(Boolean);

    return {
        headers: SHEET_CONFIG[sheetKey]?.visibleColumns || headers,
        data: data.map(row => {
            const visibleIndices = (SHEET_CONFIG[sheetKey]?.visibleColumns || headers)
                .map(col => headers.indexOf(col));
            return visibleIndices.map(index => row[index] || '');
        }),
        filterableColumns: filterValues,
        allHeaders: headers,
        allData: data
    };
}

// Función para obtener datos de una hoja específica del archivo de parámetros
async function getParametrosSheetData(sheetName) {
    try {
        console.log(`Cargando datos de parámetros de la hoja: ${sheetName}`);
        const encodedSheetName = encodeSheetName(sheetName);
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.PARAMETROS_SPREADSHEET_ID}/values/'${encodedSheetName}'?key=${GOOGLE_SHEETS_CONFIG.API_KEY}&majorDimension=ROWS`;
        
        console.log('URL de la API:', url);
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error en la respuesta:', errorData);
            throw new Error(`Error al cargar datos de parámetros: ${response.status} - ${errorData.error?.message || 'Error desconocido'}`);
        }
        
        const data = await response.json();
        return data.values?.slice(1) || []; // Ignorar primera fila
    } catch (error) {
        console.error(`Error al cargar datos de parámetros de ${sheetName}:`, error);
        return [];
    }
}

// Función para procesar los datos de las hojas de parámetros
async function loadParametrosData() {
    try {
        // Cargar datos de cada hoja
        const [agenteData, componenteData, actividadesData] = await Promise.all([
            getParametrosSheetData('Agente contaminante'),
            getParametrosSheetData('Componente ambiental'),
            getParametrosSheetData('Sub Actividades económicas + fa')
        ]);

        // Procesar datos
        const agentesContaminantes = agenteData.map(row => row[1]).filter(Boolean);
        const componentesAmbientales = componenteData.map(row => row[0]).filter(Boolean);
        const subcomponentesAmbientales = componenteData.map(row => row[1]).filter(Boolean);
        const actividadesEconomicas = [...new Set(actividadesData.map(row => row[0]))].filter(Boolean);
        
        // Procesar dependencias de actividades económicas
        const actividadesDependencias = {};
        actividadesData.forEach(row => {
            if (row[0] && row[1]) {
                if (!actividadesDependencias[row[0]]) {
                    actividadesDependencias[row[0]] = [];
                }
                actividadesDependencias[row[0]].push(row[1]);
            }
        });

        const parametrosData = {
            agentesContaminantes,
            componentesAmbientales,
            subcomponentesAmbientales,
            actividadesEconomicas,
            actividadesDependencias
        };

        console.log('Datos de parámetros cargados:', parametrosData);
        return parametrosData;
    } catch (error) {
        console.error('Error al cargar datos de parámetros:', error);
        return null;
    }
}

// Modificar la función initializeData
async function initializeData() {
    try {
        console.log('Iniciando carga de datos...');
        
        if (APP_FLAGS.useMockData) {
            console.log('Usando datos mock...');
            return {
                tableData: MOCK_DATA,
                subsectores: MOCK_SUBSECTORES,
                meses: MOCK_MESES,
                parametrosListas: MOCK_PARAMETROS_LISTAS // Usar datos mock para las listas
            };
        }
        
        // Cargar datos de parámetros y datos principales en paralelo
        const [parametrosData, ...sheetResults] = await Promise.all([
            loadParametrosData(),
            ...Object.keys(SHEET_CONFIG)
                .filter(key => key !== '1.5')
                .map(async (sheetKey) => {
                    const sheetName = SHEET_CONFIG[sheetKey].name;
                    console.log(`Cargando datos de: ${sheetName}`);
                    const rawData = await getSheetData(sheetName);
                    const processedData = processSheetData(rawData, sheetKey);
                    return [sheetKey, processedData || MOCK_DATA[sheetKey]];
                })
        ]);

        // Procesar resultados y crear objeto tableData
        const tableData = Object.fromEntries([
            ...sheetResults.filter(([_, data]) => data !== null)
        ]);

        // Estructurar los datos de parámetros para los selects usando datos reales del sheet
        const parametrosListas = {
            areasResponsables: await getParametrosSheetData('Areas_Responsables') || MOCK_PARAMETROS_LISTAS.areasResponsables,
            agentesContaminantes: await getParametrosSheetData('Agentes_Contaminantes') || MOCK_PARAMETROS_LISTAS.agentesContaminantes,
            componentesAmbientales: await getParametrosSheetData('Componentes_Ambientales') || MOCK_PARAMETROS_LISTAS.componentesAmbientales,
            subcomponentesAmbientales: await getParametrosSheetData('Subcomponentes_Ambientales') || MOCK_PARAMETROS_LISTAS.subcomponentesAmbientales,
            actividadesEconomicas: await getParametrosSheetData('Actividades_Economicas') || MOCK_PARAMETROS_LISTAS.actividadesEconomicas,
            actividadesDependencias: await loadActividadesDependencias() || MOCK_PARAMETROS_LISTAS.actividadesDependencias,
            etapasActividad: await getParametrosSheetData('Etapas_Actividad') || MOCK_PARAMETROS_LISTAS.etapasActividad,
            factoresAsociados: await getParametrosSheetData('Factores_Asociados') || MOCK_PARAMETROS_LISTAS.factoresAsociados
        };

        console.log('Datos cargados exitosamente:', {
            tableData,
            subsectores: MOCK_SUBSECTORES,
            meses: MOCK_MESES,
            parametrosListas
        });

        return {
            tableData,
            subsectores: MOCK_SUBSECTORES,
            meses: MOCK_MESES,
            parametrosListas
        };
    } catch (error) {
        console.error('Error al cargar datos:', error);
        // En caso de error, retornar los datos mock
        const mockDataWithout15 = { ...MOCK_DATA };
        delete mockDataWithout15['1.5'];
        return {
            tableData: mockDataWithout15,
            subsectores: MOCK_SUBSECTORES,
            meses: MOCK_MESES,
            parametrosListas: MOCK_PARAMETROS_LISTAS // Usar datos mock como fallback
        };
    }
}

// Función auxiliar para cargar las dependencias de actividades
async function loadActividadesDependencias() {
    try {
        const actividadesData = await getParametrosSheetData('Actividades_Dependencias');
        if (!actividadesData || !actividadesData.length) return null;

        const dependencias = {};
        actividadesData.forEach(row => {
            if (row[0] && row[1]) { // Actividad principal y subactividad
                if (!dependencias[row[0]]) {
                    dependencias[row[0]] = [];
                }
                dependencias[row[0]].push(row[1]);
            }
        });
        return dependencias;
    } catch (error) {
        console.error('Error cargando dependencias de actividades:', error);
        return null;
    }
}

// Inicializar la aplicación después de cargar los datos
async function initializeApp() {
    try {
        console.log("aaaa")
        // Mostrar loader
        document.getElementById('loader').style.display = 'flex';
        
        // Cargar datos
        const sheetsData = await initializeData();
        
        // Crear y montar la aplicación Vue
        const app = Vue.createApp({
            data() {
                // Obtener los primeros valores de cada lista
                const firstArea = sheetsData.parametrosListas.areasResponsables[0] || '';
                const firstAgente = sheetsData.parametrosListas.agentesContaminantes[0] || '';
                const firstComponente = sheetsData.parametrosListas.componentesAmbientales[0] || '';
                const firstSubcomponente = sheetsData.parametrosListas.subcomponentesAmbientales[0] || '';
                const firstActividad = sheetsData.parametrosListas.actividadesEconomicas[0] || '';
                const firstEtapa = sheetsData.parametrosListas.etapasActividad[0] || '';
                const firstFactor = sheetsData.parametrosListas.factoresAsociados[0] || '';

                // Obtener las subactividades correspondientes a la primera actividad
                const firstSubactividades = sheetsData.parametrosListas.actividadesDependencias[firstActividad] || [];
                const firstSubactividad = firstSubactividades[0] || '';

                return {
                    currentStep: APP_CONFIG.initialStep,
                    currentSubStep: APP_CONFIG.initialSubStep,
                    currentProgramacionStep: APP_CONFIG.initialProgramacionStep,
                    selectedItems: [],
                    searchQuery: '',
                    filters: this.initializeFilters(APP_CONFIG.initialSubStep),
                    pageSize: APP_CONFIG.pageSize,
                    currentPage: 1,
                    selectedRowDetails: {},
                    supervisionData: {
                        esOrientativa: null,
                        codigoProblema: '',
                        subsector: ''
                    },
                    subsectores: sheetsData.subsectores,
                    meses: sheetsData.meses,
                    administradosData: [],
                    searchAdministrado: '',
                    newItem: {
                        administrado: '',
                        unidadFiscalizable: '',
                        programacionMensual: {}
                    },
                    editingIndex: -1,
                    modalTitle: 'Agregar Administrado',
                    tableData: sheetsData.tableData,
                    allHeaders: [],
                    visibleColumns: [],
                    filterableColumns: [],
                    columnConfigModal: null,
                    sheetConfig: SHEET_CONFIG,
                    newParametro: {
                        areaResponsable: '',
                        agenteContaminante: '',
                        componenteAmbiental: '',
                        subcomponenteAmbiental: '',
                        actividadEconomica: '',
                        subactividadEconomica: '',
                        etapaActividad: '',
                        factorAsociado: '',
                        hechos: ''
                    },
                    parametrosListas: sheetsData.parametrosListas,
                    showModal: false,
                    selectedItem: {
                        areaResponsable: '',
                        agenteContaminante: '',
                        componenteAmbiental: '',
                        subcomponenteAmbiental: '',
                        actividadEconomica: '',
                        subactividadEconomica: '',
                        etapaActividad: '',
                        factorAsociado: '',
                        hechos: '',
                        latitud: -12.0464,
                        longitud: -77.0428,
                        polygonPoints: [],
                        polygons: []
                    },
                    requiredFields: ['areaResponsable', 'agenteContaminante', 'componenteAmbiental', 'actividadEconomica'],
                    map: null,
                    marker: null,
                    subactividadesDisponibles: firstSubactividades
                };
            },
            mounted() {
                this.modal = new bootstrap.Modal(document.querySelector('#formModal'));
                this.columnConfigModal = new bootstrap.Modal(document.querySelector('#columnConfigModal'));
            },
            computed: {
                currentHeaders() {
                    const currentData = this.tableData[this.currentSubStep];
                    return currentData ? currentData.headers : [];
                },
                currentFilters() {
                    const currentData = this.tableData[this.currentSubStep];
                    return currentData ? currentData.filterableColumns : [];
                },
                filteredData() {
                    let data = this.tableData[this.currentSubStep]?.data || [];
                    
                    // Aplicar búsqueda
                    if (this.searchQuery) {
                        const query = this.searchQuery.toLowerCase();
                        data = data.filter(row => 
                            row.some(cell => 
                                String(cell).toLowerCase().includes(query)
                            )
                        );
                    }
                    
                    // Aplicar filtros
                    Object.entries(this.filters).forEach(([column, value]) => {
                        if (value) {
                            const columnIndex = this.currentHeaders.indexOf(column);
                            if (columnIndex !== -1) {
                                data = data.filter(row => 
                                    String(row[columnIndex]) === String(value)
                                );
                            }
                        }
                    });
                    
                    return data;
                },
                paginatedData() {
                    const start = (this.currentPage - 1) * this.pageSize;
                    return this.filteredData.slice(start, start + this.pageSize);
                },
                totalItems() {
                    return this.filteredData.length;
                },
                totalPages() {
                    return Math.ceil(this.totalItems / this.pageSize);
                },
                isFormValid() {
                    return this.requiredFields.every(field => this.selectedItem[field]);
                }
            },
            methods: {
                initializeFilters(subStep) {
                    const currentData = MOCK_DATA[subStep] || {};
                    const filterColumns = currentData.filterableColumns || [];
                    const initialFilters = {};
                    
                    filterColumns.forEach(filter => {
                        initialFilters[filter.column] = '';  // '' representa "Todos"
                    });
                    
                    return initialFilters;
                },
                setCurrentStep(step) {
                    this.currentStep = step;
                },
                selectSubStep(subStep) {
                    this.currentSubStep = subStep;
                    this.currentPage = 1;
                    this.searchQuery = '';
                    this.filters = this.initializeFilters(subStep);
                },
                selectProgramacionStep(step) {
                    this.currentProgramacionStep = step;
                },
                changePage(page) {
                    if (page >= 1 && page <= this.totalPages) {
                        this.currentPage = page;
                    }
                },
                getProgressWidth(section) {
                    if (section === 'problematica') {
                        const progress = ((this.currentSubStep - 1.1) / 0.4) * 100;
                        return `${progress}%`;
                    } else if (section === 'programacion') {
                        const progress = ((this.currentProgramacionStep - 2.1) / 0.1) * 100;
                        return `${progress}%`;
                    }
                    return '0%';
                },
                isSelected(index) {
                    const currentData = this.filteredData[index];
                    if (!currentData) return false;
                    
                    const itemId = `${this.currentSubStep}-${index}`;
                    return this.selectedItems.includes(itemId);
                },
                toggleSelection(index) {
                    const itemId = `${this.currentSubStep}-${index}`;
                    const itemIndex = this.selectedItems.indexOf(itemId);
                    
                    if (itemIndex === -1) {
                        this.selectedItems.push(itemId);
                    } else {
                        this.selectedItems.splice(itemIndex, 1);
                    }
                },
                openDetailModal(row) {
                    console.log('Opening detail modal for row:', row);
                    
                    const currentData = this.tableData[this.currentSubStep];
                    if (!currentData || !currentData.allHeaders) {
                        console.error('No hay datos o encabezados disponibles');
                        return;
                    }
                    
                    this.selectedRowDetails = {};
                    
                    // Buscar la fila completa en allData
                    let rowData = currentData.allData.find(r => {
                        if (!r || !r.length) return false;
                        
                        // Comparar cada valor visible
                        const visibleIndices = this.sheetConfig[this.currentSubStep].visibleColumns.map(col => 
                            currentData.allHeaders.indexOf(col)
                        );
                        return visibleIndices.every((index, i) => {
                            return String(r[index]) === String(row[i]);
                        });
                    });

                    if (!rowData) {
                        console.error('No se encontró la fila correspondiente en allData');
                        return;
                    }

                    console.log('Fila encontrada:', rowData);

                    // Procesar los detalles de la fila
                    currentData.allHeaders.forEach((header, index) => {
                        if (header === 'Polígonos') {
                            try {
                                const polygonString = rowData[index];
                                console.log('Polygon string:', polygonString);
                                if (polygonString) {
                                    const polygonsData = JSON.parse(polygonString);
                                    console.log('Parsed polygons:', polygonsData);
                                    if (Array.isArray(polygonsData) && polygonsData.length > 0) {
                                        this.selectedRowDetails[header] = polygonsData.map((points, polyIndex) => ({
                                            titulo: `Polígono ${polyIndex + 1}`,
                                            puntos: points
                                        }));
                                    }
                                }
                            } catch (e) {
                                console.error('Error parsing polygon data:', e);
                                this.selectedRowDetails[header] = [];
                            }
                        } else {
                            this.selectedRowDetails[header] = rowData[index] || '';
                        }
                    });

                    console.log('Selected row details:', this.selectedRowDetails);
                    
                    // Mostrar el modal
                    const modal = new bootstrap.Modal(document.getElementById('detailModal'));
                    modal.show();
                },
                getSelectedItemDetails(itemId) {
                    const [sheetKey, index] = itemId.split('-');
                    const data = this.tableData[sheetKey]?.data[index];
                    if (!data) return '';
                    
                    return data.join(' - ');
                },
                deselectItem(index) {
                    this.selectedItems.splice(index, 1);
                },
                openModal() {
                    this.resetForm();
                    const modalEl = document.getElementById('formModal');
                    if (!modalEl._bootstrap_modal) {
                        modalEl._bootstrap_modal = new bootstrap.Modal(modalEl);
                    }
                    modalEl._bootstrap_modal.show();
                    
                    // Inicializar el mapa después de que el modal se muestre
                    modalEl.addEventListener('shown.bs.modal', () => {
                        this.initMap();
                    }, { once: true });
                },
                closeModal() {
                    const modalEl = document.getElementById('formModal');
                    if (modalEl._bootstrap_modal) {
                        modalEl._bootstrap_modal.hide();
                    }
                    this.resetForm();
                },
                resetForm() {
                    this.selectedItem = {
                        areaResponsable: '',
                        agenteContaminante: '',
                        componenteAmbiental: '',
                        subcomponenteAmbiental: '',
                        actividadEconomica: '',
                        subactividadEconomica: '',
                        etapaActividad: '',
                        factorAsociado: '',
                        hechos: '',
                        latitud: -12.0464,
                        longitud: -77.0428,
                        polygonPoints: [],
                        polygons: []
                    };

                    // Inicializar las subactividades como array vacío
                    this.subactividadesDisponibles = [];
                },
                toggleColumnVisibility(column) {
                    const index = this.filterableColumns.indexOf(column);
                    if (index === -1) {
                        this.filterableColumns.push(column);
                    } else {
                        this.filterableColumns.splice(index, 1);
                    }
                },
                saveColumnConfig() {
                    // Actualizar la configuración visible
                    this.sheetConfig[this.currentSubStep].visibleColumns = [...this.visibleColumns];
                    this.sheetConfig[this.currentSubStep].filterableColumns = [...this.filterableColumns];
                    
                    // Actualizar los datos visibles
                    const currentData = this.tableData[this.currentSubStep];
                    if (currentData) {
                        currentData.headers = this.visibleColumns;
                        currentData.data = currentData.allData.map(row => {
                            return this.visibleColumns.map(col => {
                                const index = currentData.allHeaders.indexOf(col);
                                return index !== -1 ? row[index] : '';
                            });
                        });
                    }
                    
                    // Cerrar el modal
                    const modal = bootstrap.Modal.getInstance(document.getElementById('columnConfigModal'));
                    if (modal) modal.hide();
                },
                initMap() {
                    const mapOptions = {
                        center: { 
                            lat: this.selectedItem.latitud, 
                            lng: this.selectedItem.longitud 
                        },
                        zoom: 12,
                        mapTypeId: 'satellite'
                    };
                    
                    this.map = new google.maps.Map(
                        document.getElementById('map'),
                        mapOptions
                    );

                    const drawingManager = new google.maps.drawing.DrawingManager({
                        drawingMode: google.maps.drawing.OverlayType.POLYGON,
                        drawingControl: true,
                        drawingControlOptions: {
                            position: google.maps.ControlPosition.TOP_CENTER,
                            drawingModes: ['polygon']
                        },
                        polygonOptions: {
                            fillColor: '#FF0000',
                            fillOpacity: 0.3,
                            strokeWeight: 2,
                            clickable: true,
                            editable: true,
                            zIndex: 1
                        }
                    });

                    drawingManager.setMap(this.map);

                    google.maps.event.addListener(drawingManager, 'polygoncomplete', async (polygon) => {
                        const vertices = polygon.getPath();
                        polygon.setEditable(true);

                        // Procesar puntos iniciales
                        const points = await this.processPolygonPoints(vertices);
                        
                        // Añadir nuevo polígono al array
                        this.selectedItem.polygons.push({
                            polygon: polygon,
                            points: points
                        });

                        // Escuchar cambios en el polígono
                        const updatePolygon = async () => {
                            const index = this.selectedItem.polygons.findIndex(p => p.polygon === polygon);
                            if (index !== -1) {
                                const updatedPoints = await this.processPolygonPoints(vertices);
                                this.selectedItem.polygons[index].points = updatedPoints;
                            }
                        };

                        google.maps.event.addListener(vertices, 'set_at', updatePolygon);
                        google.maps.event.addListener(vertices, 'insert_at', updatePolygon);
                        google.maps.event.addListener(vertices, 'remove_at', updatePolygon);
                    });
                },
                openColumnConfig() {
                    // Verificar si tenemos datos válidos
                    const currentData = this.tableData[this.currentSubStep];
                    if (!currentData) {
                        console.error('No hay datos para la sub-step actual:', this.currentSubStep);
                        return;
                    }
                    
                    // Verificar si tenemos la configuración de la hoja
                    if (!this.sheetConfig[this.currentSubStep]) {
                        console.error('No hay configuración para la sub-step actual:', this.currentSubStep);
                        return;
                    }
                    
                    // Inicializar la configuración del modal con los datos correctos
                    this.allHeaders = currentData.allHeaders || [];
                    this.visibleColumns = [...(this.sheetConfig[this.currentSubStep].visibleColumns || [])];
                    this.filterableColumns = [...(this.sheetConfig[this.currentSubStep].filterableColumns || [])];
                    
                    // Mostrar el modal usando Bootstrap
                    const modalEl = document.getElementById('columnConfigModal');
                    if (!modalEl) {
                        console.error('No se encontró el elemento modal');
                        return;
                    }
                    
                    const modal = new bootstrap.Modal(modalEl);
                    modal.show();
                },
                async processPolygonPoints(vertices) {
                    const points = [];
                    for (let i = 0; i < vertices.getLength(); i++) {
                        const xy = vertices.getAt(i);
                        const latLng = {
                            lat: xy.lat(),
                            lng: xy.lng()
                        };
                        
                        try {
                            // Obtener elevación
                            const elevation = await this.getElevation(latLng);
                            
                            // Convertir a UTM
                            const utmCoords = this.convertToUTM(latLng);
                            points.push({
                                ...utmCoords,
                                altitud: elevation.toFixed(2)
                            });
                        } catch (error) {
                            console.error('Error al procesar punto:', error);
                        }
                    }
                    return points;
                },
                convertToUTM(latLng) {
                    // Definir las zonas UTM para Perú
                    const utmZones = {
                        17: '+proj=utm +zone=17 +south +datum=WGS84 +units=m +no_defs',
                        18: '+proj=utm +zone=18 +south +datum=WGS84 +units=m +no_defs',
                        19: '+proj=utm +zone=19 +south +datum=WGS84 +units=m +no_defs'
                    };

                    // Determinar la zona UTM basada en la longitud
                    let zone;
                    if (latLng.lng >= -84 && latLng.lng < -78) zone = 17;
                    else if (latLng.lng >= -78 && latLng.lng < -72) zone = 18;
                    else if (latLng.lng >= -72 && latLng.lng < -66) zone = 19;
                    else zone = 18; // Zona por defecto si está fuera de rango

                    // Convertir coordenadas usando proj4js
                    const fromWGS84 = '+proj=longlat +datum=WGS84 +no_defs';
                    const toUTM = utmZones[zone];
                    
                    const result = proj4(fromWGS84, toUTM, [latLng.lng, latLng.lat]);

                    return {
                        zone: zone,
                        este: result[0].toFixed(2),
                        norte: result[1].toFixed(2),
                        lat: latLng.lat,
                        lng: latLng.lng
                    };
                },
                async getElevation(latLng) {
                    return new Promise((resolve, reject) => {
                        const elevator = new google.maps.ElevationService();
                        elevator.getElevationForLocations({
                            locations: [latLng]
                        }, (results, status) => {
                            if (status === 'OK' && results[0]) {
                                resolve(results[0].elevation);
                            } else {
                                reject(new Error('No se pudo obtener la elevación'));
                            }
                        });
                    });
                },
                saveForm() {
                    console.log('Ejecutando saveForm', this.selectedItem);
                    if (!this.isFormValid) {
                        alert('Por favor complete todos los campos requeridos');
                        return;
                    }

                    // Procesar los polígonos para guardarlos
                    const polygonsData = this.selectedItem.polygons.map(p => p.points);

                    // Crear el nuevo registro con los datos del formulario
                    const newRecord = [
                        this.selectedItem.areaResponsable,
                        this.selectedItem.agenteContaminante,
                        this.selectedItem.componenteAmbiental,
                        this.selectedItem.subcomponenteAmbiental,
                        this.selectedItem.actividadEconomica,
                        this.selectedItem.subactividadEconomica,
                        this.selectedItem.etapaActividad,
                        this.selectedItem.factorAsociado,
                        this.selectedItem.hechos,
                        JSON.stringify(polygonsData) // Agregar los polígonos como último campo
                    ];

                    // Inicializar la estructura de datos para 1.5 si no existe
                    if (!this.tableData['1.5']) {
                        this.tableData['1.5'] = {
                            headers: MOCK_PARAMETROS_DATA.headers,
                            data: [],
                            filterableColumns: MOCK_PARAMETROS_DATA.filterableColumns,
                            allHeaders: [...MOCK_PARAMETROS_DATA.allHeaders, 'Polígonos'], // Agregar la columna de polígonos
                            allData: []
                        };
                    }

                    // Agregar el nuevo registro a allData
                    this.tableData['1.5'].allData.push(newRecord);

                    // Actualizar la vista de datos visible
                    const visibleData = this.sheetConfig['1.5'].visibleColumns.map(col => {
                        const index = this.tableData['1.5'].allHeaders.indexOf(col);
                        return index !== -1 ? newRecord[index] : '';
                    });
                    this.tableData['1.5'].data.push(visibleData);

                    // Cerrar el modal y resetear el formulario
                    this.closeModal();
                    alert('Registro guardado exitosamente');
                }
            },
            watch: {
                // Agregar un watcher para actividadEconomica
                'selectedItem.actividadEconomica': function(newValue) {
                    // Actualizar las subactividades disponibles basado en la actividad seleccionada
                    this.subactividadesDisponibles = this.parametrosListas.actividadesDependencias[newValue] || [];
                    // Limpiar la subactividad seleccionada si no está en las nuevas opciones
                    if (!this.subactividadesDisponibles.includes(this.selectedItem.subactividadEconomica)) {
                        this.selectedItem.subactividadEconomica = '';
                    }
                }
            }
        });

        app.mount('#app');
        
        // Ocultar loader
        document.getElementById('loader').style.display = 'none';
    } catch (error) {
        console.error('Error initializing app:', error);
        document.getElementById('loader').style.display = 'none';
        document.getElementById('app').innerHTML = `
            <div class="alert alert-danger" role="alert">
                Error al cargar los datos. Por favor, intente nuevamente más tarde.
            </div>
        `;
    }
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeApp); 