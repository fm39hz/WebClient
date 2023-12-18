const SidebarContent = () => {
    return (
        <div className="SidebarContent w-96 h-96 pl-3.5 pr-96 pt-3 pb-96 bg-white justify-start items-start gap-28 inline-flex">
            <div className="Group15 w-32 h-24 relative">
                <div className="ThNgHiU w-32 h-5 left-0 top-0 absolute text-red-600 text-base font-semibold ">Thương hiệu</div>
                <div className="Nvidia w-32 h-5 left-0 top-[28px] absolute text-black text-base font-normal ">Nvidia</div>
                <div className="Amd w-32 h-5 left-0 top-[56px] absolute text-black text-base font-normal ">AMD</div>
                <div className="XemTTC w-32 h-5 left-0 top-[84px] absolute text-black text-base font-normal ">Xem tất cả</div>
            </div>
            <div className="Group16 w-32 h-33 relative">
                <div className="GiBN w-32 h-5 left-0 top-0 absolute text-red-600 text-base font-semibold ">Giá bán</div>
                <div className="DI5m w-32 h-5 left-0 top-[28px] absolute text-black text-base font-normal ">Dưới 5M</div>
                <div className="DI10m w-32 h-5 left-0 top-[56px] absolute text-black text-base font-normal ">Dưới 10M</div>
                <div className="DI15m w-32 h-5 left-0 top-[84px] absolute text-black text-base font-normal ">Dưới 15M</div>
                <div className="XemTTC w-32 h-5 left-0 top-[112px] absolute text-black text-base font-normal ">Xem tất cả</div>
            </div>
            <div className="Group17 w-32 h-32 relative">
                <div className="Series w-32 h-5 left-0 top-0 absolute text-red-600 text-base font-semibold ">Series</div>
                <div className="Gtx3050 w-32 h-5 left-0 top-[28px] absolute text-black text-base font-normal ">GTX 3050</div>
                <div className="Gtx4060 w-32 h-5 left-0 top-[56px] absolute text-black text-base font-normal ">GTX 4060</div>
                <div className="Rt w-32 h-5 left-0 top-[84px] absolute text-black text-base font-normal ">RT</div>
                <div className="XemTTC w-32 h-5 left-0 top-[112px] absolute text-black text-base font-normal ">Xem tất cả</div>
            </div>
        </div>
    )
}
export default SidebarContent