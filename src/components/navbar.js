import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
   
   
    return (
        <div>
       <>
{/* Hello world */}


{/*begin::Header*/}
<div id="kt_header" className="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
          {/*begin::Container*/}
          <div className="container d-flex align-items-stretch justify-content-between">
            {/*begin::Left*/}
            <div className="d-flex align-items-center">
              {/*begin::Mega Menu Toggler*/}
              <button className="btn btn-icon btn-accent me-2 me-lg-6" id="kt_mega_menu_toggle" data-bs-toggle="modal" data-bs-target="#kt_mega_menu_modal">
                {/*begin::Svg Icon | path: '.svg/icons/Text/Article.svg.'*/}
                <span className="svg-icon svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <rect fill="#000000" x={4} y={5} width={16} height={3} rx="1.5" />
                      <path d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 C14,12.3284271 13.3284271,13 12.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </button>
              {/*end::Mega Menu Toggler*/}
              {/*begin::Logo*/}
              <a href="../index-2.html">
                <img alt="Logo" src="../assets/media/logos/logo-default.svg" className="h-30px" />
              </a>
              {/*end::Logo*/}
            </div>
            {/*end::Left*/}
            {/*begin::Right*/}
            <div className="d-flex align-items-center">
              {/*begin::Search*/}
              <button className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6" data-bs-toggle="modal" data-bs-target="#kt_header_search_modal">
                {/*begin::Svg Icon | path: '.svg/icons/General/Search.svg.'*/}
                <span className="svg-icon svg-icon-1 svg-icon-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                      <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
                    </g>
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </button>
              {/*end::Search*/}
              {/*begin::Message*/}
              <button className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6" data-bs-toggle="modal" data-bs-target="#kt_inbox_compose">
                {/*begin::Svg Icon | path: '.svg/icons/Communication/Chat6.svg.'*/}
                <span className="svg-icon svg-icon-1 svg-icon-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M14.4862 18L12.7975 21.0566C12.5304 21.54 11.922 21.7153 11.4386 21.4483C11.2977 21.3704 11.1777 21.2597 11.0887 21.1255L9.01653 18H5C3.34315 18 2 16.6569 2 15V6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H14.4862Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7ZM6 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11Z" fill="black" />
                    </g>
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </button>
              {/*end::Message*/}
              {/*begin::User*/}
              <div className="ms-1 ms-lg-6">
                {/*begin::Toggle*/}
                <div className="btn btn-icon btn-sm btn-active-bg-accent" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: '.svg/icons/General/User.svg.'*/}
                  <span className="svg-icon svg-icon-1 svg-icon-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <polygon points="0 0 24 0 24 24 0 24" />
                        <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                        <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*begin::Menu*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-300px" data-kt-menu="true">
                  <div className="menu-content fw-bold d-flex align-items-center bgi-no-repeat bgi-position-y-top rounded-top" style={{backgroundImage: 'url("../assets/media/misc/dropdown-header-bg.jpg")'}}>
                    <div className="symbol symbol-45px mx-5 py-5">
                      <span className="symbol-label bg-primary align-items-end">
                        <img alt="Logo" src="../assets/media/svg/avatars/001-boy.svg" className="mh-35px" />
                      </span>
                    </div>
                    <div className>
                      <span className="text-white fw-bolder fs-4">Hello, James</span>
                      <span className="text-white fw-bold fs-7 d-block">CRM Product Designer</span>
                    </div>
                  </div>
                  {/*begin::Row*/}
                  <div className="row row-cols-2 g-0">
                    
                    
                    <Link to="/account" className="border-bottom border-end text-center py-10 btn btn-active-color-primary rounded-0">
                      {/*begin::Svg Icon | path: '.svg/icons/Layout/Layout-4-blocks.svg.'*/}
                      <span className="svg-icon svg-icon-3x me-n1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <rect x={0} y={0} width={24} height={24} />
                            <rect fill="#000000" x={4} y={4} width={7} height={7} rx="1.5" />
                            <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      <span className="fw-bolder fs-6 d-block pt-3">My Profile</span>
                    
                    
                    
                    </Link>
                    <Link to="#" className="col border-bottom text-center py-10 btn btn-active-color-primary rounded-0">
                      {/*begin::Svg Icon | path: '.svg/icons/General/Settings-1.svg.'*/}
                      <span className="svg-icon svg-icon-3x me-n1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <rect x={0} y={0} width={24} height={24} />
                            <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                            <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      <span className="fw-bolder fs-6 d-block pt-3">Settings</span>
                   



                    </Link>
                    <Link to="#" className="col text-center border-end py-10 btn btn-active-color-primary rounded-0">
                      {/*begin::Svg Icon | path: '.svg/icons/Shopping/Euro.svg.'*/}
                      <span className="svg-icon svg-icon-3x me-n1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <rect x={0} y={0} width={24} height={24} />
                            <path d="M4.3618034,10.2763932 L4.8618034,9.2763932 C4.94649941,9.10700119 5.11963097,9 5.30901699,9 L15.190983,9 C15.4671254,9 15.690983,9.22385763 15.690983,9.5 C15.690983,9.57762255 15.6729105,9.65417908 15.6381966,9.7236068 L15.1381966,10.7236068 C15.0535006,10.8929988 14.880369,11 14.690983,11 L4.80901699,11 C4.53287462,11 4.30901699,10.7761424 4.30901699,10.5 C4.30901699,10.4223775 4.32708954,10.3458209 4.3618034,10.2763932 Z M14.6381966,13.7236068 L14.1381966,14.7236068 C14.0535006,14.8929988 13.880369,15 13.690983,15 L4.80901699,15 C4.53287462,15 4.30901699,14.7761424 4.30901699,14.5 C4.30901699,14.4223775 4.32708954,14.3458209 4.3618034,14.2763932 L4.8618034,13.2763932 C4.94649941,13.1070012 5.11963097,13 5.30901699,13 L14.190983,13 C14.4671254,13 14.690983,13.2238576 14.690983,13.5 C14.690983,13.5776225 14.6729105,13.6541791 14.6381966,13.7236068 Z" fill="#000000" opacity="0.3" />
                            <path d="M17.369,7.618 C16.976998,7.08599734 16.4660031,6.69750122 15.836,6.4525 C15.2059968,6.20749878 14.590003,6.085 13.988,6.085 C13.2179962,6.085 12.5180032,6.2249986 11.888,6.505 C11.2579969,6.7850014 10.7155023,7.16999755 10.2605,7.66 C9.80549773,8.15000245 9.45550123,8.72399671 9.2105,9.382 C8.96549878,10.0400033 8.843,10.7539961 8.843,11.524 C8.843,12.3360041 8.96199881,13.0779966 9.2,13.75 C9.43800119,14.4220034 9.7774978,14.9994976 10.2185,15.4825 C10.6595022,15.9655024 11.1879969,16.3399987 11.804,16.606 C12.4200031,16.8720013 13.1129962,17.005 13.883,17.005 C14.681004,17.005 15.3879969,16.8475016 16.004,16.5325 C16.6200031,16.2174984 17.1169981,15.8010026 17.495,15.283 L19.616,16.774 C18.9579967,17.6000041 18.1530048,18.2404977 17.201,18.6955 C16.2489952,19.1505023 15.1360064,19.378 13.862,19.378 C12.6999942,19.378 11.6325049,19.1855019 10.6595,18.8005 C9.68649514,18.4154981 8.8500035,17.8765035 8.15,17.1835 C7.4499965,16.4904965 6.90400196,15.6645048 6.512,14.7055 C6.11999804,13.7464952 5.924,12.6860058 5.924,11.524 C5.924,10.333994 6.13049794,9.25950479 6.5435,8.3005 C6.95650207,7.34149521 7.5234964,6.52600336 8.2445,5.854 C8.96550361,5.18199664 9.8159951,4.66400182 10.796,4.3 C11.7760049,3.93599818 12.8399943,3.754 13.988,3.754 C14.4640024,3.754 14.9609974,3.79949954 15.479,3.8905 C15.9970026,3.98150045 16.4939976,4.12149906 16.97,4.3105 C17.4460024,4.49950095 17.8939979,4.7339986 18.314,5.014 C18.7340021,5.2940014 19.0909985,5.62999804 19.385,6.022 L17.369,7.618 Z" fill="#000000" />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      <span className="fw-bolder fs-6 d-block pt-3">Subscriptions</span>
                    </Link>
                    <Link to="/login" className="col text-center py-10 btn btn-active-color-primary rounded-0">
                      {/*begin::Svg Icon | path: '.svg/icons/Navigation/Sign-out.svg.'*/}
                      <span className="svg-icon svg-icon-3x me-n1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <rect x={0} y={0} width={24} height={24} />
                            <path d="M14.0069431,7.00607258 C13.4546584,7.00607258 13.0069431,6.55855153 13.0069431,6.00650634 C13.0069431,5.45446114 13.4546584,5.00694009 14.0069431,5.00694009 L15.0069431,5.00694009 C17.2160821,5.00694009 19.0069431,6.7970243 19.0069431,9.00520507 L19.0069431,15.001735 C19.0069431,17.2099158 17.2160821,19 15.0069431,19 L3.00694311,19 C0.797804106,19 -0.993056895,17.2099158 -0.993056895,15.001735 L-0.993056895,8.99826498 C-0.993056895,6.7900842 0.797804106,5 3.00694311,5 L4.00694793,5 C4.55923268,5 5.00694793,5.44752105 5.00694793,5.99956624 C5.00694793,6.55161144 4.55923268,6.99913249 4.00694793,6.99913249 L3.00694311,6.99913249 C1.90237361,6.99913249 1.00694311,7.89417459 1.00694311,8.99826498 L1.00694311,15.001735 C1.00694311,16.1058254 1.90237361,17.0008675 3.00694311,17.0008675 L15.0069431,17.0008675 C16.1115126,17.0008675 17.0069431,16.1058254 17.0069431,15.001735 L17.0069431,9.00520507 C17.0069431,7.90111468 16.1115126,7.00607258 15.0069431,7.00607258 L14.0069431,7.00607258 Z" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(9.006943, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-9.006943, -12.000000)" />
                            <rect fill="#000000" opacity="0.3" transform="translate(14.000000, 12.000000) rotate(-270.000000) translate(-14.000000, -12.000000)" x={13} y={6} width={2} height={12} rx={1} />
                            <path d="M21.7928932,9.79289322 C22.1834175,9.40236893 22.8165825,9.40236893 23.2071068,9.79289322 C23.5976311,10.1834175 23.5976311,10.8165825 23.2071068,11.2071068 L20.2071068,14.2071068 C19.8165825,14.5976311 19.1834175,14.5976311 18.7928932,14.2071068 L15.7928932,11.2071068 C15.4023689,10.8165825 15.4023689,10.1834175 15.7928932,9.79289322 C16.1834175,9.40236893 16.8165825,9.40236893 17.2071068,9.79289322 L19.5,12.0857864 L21.7928932,9.79289322 Z" fill="#000000" fillRule="nonzero" transform="translate(19.500000, 12.000000) rotate(-90.000000) translate(-19.500000, -12.000000)" />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      <span className="fw-bolder fs-6 d-block pt-3">Sign Out</span>
                    </Link>
                  </div>
                  {/*end::Row*/}
                </div>
                {/*end::Menu*/}
              </div>
              {/*end::User*/}
            
              {/*begin::Aside Toggler*/}
              {/*end::Aside Toggler*/}
              {/*begin::Sidebar Toggler*/}
              <button className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6" id="kt_sidebar_toggler">
                {/*begin::Svg Icon | path: '.svg/icons/Text/Menu.svg.'*/}
                <span className="svg-icon svg-icon-1 svg-icon-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <rect fill="#000000" x={4} y={5} width={16} height={3} rx="1.5" />
                      <path d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </button>
              {/*end::Sidebar Toggler*/}
            </div>
            {/*end::Right*/}
          </div>
          {/*end::Container*/}
        </div>
      {/*end::Header*/}



</>
        </div>
    )
}



export default Navbar