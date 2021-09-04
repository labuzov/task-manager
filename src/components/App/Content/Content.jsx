import { Redirect, Route, Switch } from 'react-router-dom';
import HeaderContainer from './Header/HeaderContainer';
import Sidebar from './Sidebar/Sidebar';
import Workspace from './Workspace/Workspace';
import './Content.scss';


function Content(props) {

    return (
        <>
            <HeaderContainer />

            <div className="content">
                <div className="content__container">
                    <Sidebar />

                    <Switch>

                        {/* <Route exact path="/" render={() =>
                            <Workspace />
                        } /> */}

                        <Route path="/app/:folderId" render={() =>
                            <Workspace />
                        } />

                        <Route path="*" render={() =>
                            <Redirect to="/app/home" />
                        } />

                    </Switch>

                </div>
                
            </div>
        </>
    )

}



export default Content;
