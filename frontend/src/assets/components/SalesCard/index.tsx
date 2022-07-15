import './styles.css'
import NotificationButton from '../NotificationButton'

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="Data inicial" />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="Data final " />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#001</td>
                                <td className="show576">10/07/2022</td>
                                <td>Renan</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55200.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#002</td>
                                <td className="show576">10/07/2022</td>
                                <td>Renata</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 45200.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#003</td>
                                <td className="show576">10/07/2022</td>
                                <td>Rafael</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 65200.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard