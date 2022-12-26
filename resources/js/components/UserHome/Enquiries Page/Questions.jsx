export const questions = [
    {
        section: 1,
        items: [
            {
                label: 'الاسم',
                type: 'text',
                value: 'name'
            },
            {
                label: 'الفرع',
                type: 'selectBranch',
                value: 'branch',
                options: [ 'المعهد التقاني للحاسوب', 'كلية الهندسة المعلوماتية']
            },
            {
                label: 'السنة الدراسية',
                type: 'select',
                value: 'yearAC',
                optionInstitute: [ 'سنة ثانية', 'سنة اولى'],
                optionCollege: [ 'سنة خامسة','سنة رابعة','سنة ثالثة','سنة ثانية', 'سنة اولى'],
            }
        ]
    },
    {
        section: 2,
        items: [
            {
                label: 'اسم المادة',
                type: 'selectMaterial',
                optionsOne: [ 'State 1', 'State 2'],
                optionsTow: [ 'State 3', 'State 4'],
                value: 'material'
            },
            {
                label: 'السؤال',
                type: 'textarea',
                value: 'question',
                placeholder:'مطلوب'
            },

            {
                label: 'اقتراحات لتحسين الموقع',
                type: 'textarea',
                value: 'suggestion',
                placeholder:'غير مطلوب'
            },
        ]
    },
    {
        section: 3,
        items: [
            {
                label: 'إذا كنت مستعدا للإرسال ، يرجى الضغط على  ',
                submit:'إرسال',
                type: 'information'
            }
        ]
    }
]

