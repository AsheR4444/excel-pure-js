import { Excel } from './components/Excel'
import { Header } from './components/Header'
import { Toolbar } from './components/Toolbar'
import { Formula } from './components/Formula'
import { Table } from './components/Table'

import './scss/index.scss'

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
})

excel.render()
