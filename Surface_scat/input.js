

title = 'Surface scatterplots'

framec='lightcoral'

v[0] = ['s']
t[0] = ['Full scatter']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL','masl_0-200m','masl_600-1000m','METCOOPCoast'] ;
t[3] = v[3] ;
v[4] = ['PS','SPS','FF','GX','DD','TT','TTHA','TX','TN','RH','QQ','NN','PE1','VI']
t[4] = ['Mslp','Station pressure','U10m','Max Wind Gust','Wind direction','T2m','T2m, height corr.','Max T2m','Min T2m','Rh2m','Q2m','Cloud cover','1h Precipitation','Visibility']
v[5] = [0]
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['Exp0_cy43_ref_z','NetA_cy43_iobs_roel_v1','NetA_cy43_iobs_paulo_v1']
t[6] = ['Exp0_cy43_ref_z','NetA_cy43_iobs_roel_v1','NetA_cy43_iobs_paulo_v1']
v[7] = ['ALL'] ;
t[7] = v[7] ;

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Initial time']
loc = ['l','t','t','t','l','l','t']
spec_name =[0,1,2,3,7,6,4,5]
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'Observation verification comparison'; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']
