import React from 'react';
import { FaRegFolderOpen, FaUsers } from 'react-icons/fa6'
import { BsFillSendArrowUpFill } from "react-icons/bs"
import { BiSolidErrorAlt } from "react-icons/bi";
import { ImSortAmountDesc } from "react-icons/im";
import { MdPending } from "react-icons/md";
import { SidebarLeft } from '@/components/sidebars/SidebarLeft';
import { ContainerRoot } from '@/components/containers/ContainerRoot';
import { ContainerSmall } from '@/components/containers/ContainerSmall';
import { CardSmall } from '@/components/cards/CardSmall';
import { CardMedium } from '@/components/cards/CardMedium';
import { CardBig } from '@/components/cards/CardBig';
import { Navbar } from '@/components/layouts/Navbar';

interface DashboardProps {

}
const Dashboard = (props : DashboardProps) => {

    return(
        <>
            {/* <SidebarLeft/> */}
            <ContainerRoot>
                <ContainerSmall>
                    <CardBig>
                        Eros ravier
                    </CardBig>
                    <CardMedium icon={FaRegFolderOpen}>Eros ravier</CardMedium>
                </ContainerSmall>
                <ContainerSmall>
                    <CardSmall title='Aberto' quant={758569} icon={FaRegFolderOpen}/>
                    <CardSmall title='Enviados' quant={45952} icon={BsFillSendArrowUpFill }/>
                    <CardSmall title='Descarregados' quant={35858} icon={ImSortAmountDesc}/>
                    <CardSmall title='Improcedentes' quant={2558} icon={BiSolidErrorAlt}/>
                    <CardSmall title='Pendentes' quant={8105} icon={MdPending}/>
                    <CardSmall title='Desc. Concluídos' quant={20589} icon={FaUsers}/>
                    <CardSmall title='Desc. Impedimentos' quant={15359} icon={FaUsers}/>
                </ContainerSmall>
               
                <ContainerSmall>
                    <CardMedium icon={FaRegFolderOpen}>Eros ravier</CardMedium>
                    <CardMedium icon={BsFillSendArrowUpFill }>Eros ravier</CardMedium>
                    <CardMedium icon={ImSortAmountDesc}>Eros ravier</CardMedium>
                    <CardMedium icon={BiSolidErrorAlt}>Eros ravier</CardMedium>
                    <CardMedium icon={MdPending}>Eros ravier</CardMedium>
                    <CardMedium icon={FaUsers}>Eros ravier</CardMedium>
                    <CardMedium icon={FaUsers}>Eros ravier</CardMedium>
                </ContainerSmall>
            </ContainerRoot>
        </>
    )
}
export default Dashboard