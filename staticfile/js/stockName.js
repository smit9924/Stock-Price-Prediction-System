const stockName = ['AACG', 'AACI', 'AACIU', 'AACIW', 'AACOU', 'AADI', 'AAL', 'AAME', 'AAOI', 'AAON', 'AAPL', 'AAWW', 'ABCB', 'ABCL', 'ABCM', 'ABEO', 'ABGI', 'ABIO', 'ABMD', 'ABNB', 'ABOS', 'ABP', 'ABSI', 'ABST', 'ABUS', 'ABVC', 'ACAB', 'ACABU', 'ACABW', 'ACACU', 'ACACW', 'ACAD', 'ACAH', 'ACAHU', 'ACAX', 'ACAXR', 'ACAXU', 'ACAXW', 'ACB', 'ACBA', 'ACBAU', 'ACBAW', 'ACCD', 'ACDC', 'ACDCW', 'ACER', 'ACET', 'ACEV', 'ACGL', 'ACGLN', 'ACGLO', 'ACGN', 'ACHC', 'ACHL', 'ACHV', 'ACIU', 'ACIW', 'ACLS', 'ACLX', 'ACMR', 'ACNB', 'ACNT', 'ACON', 'ACONW', 'ACOR', 'ACQR', 'ACQRU', 'ACRS', 'ACRV', 'ACRX', 'ACST', 'ACTG', 'ACVA', 'ACXP', 'ADAG', 'ADAL', 'ADALU', 'ADALW', 'ADAP', 'ADBE', 'ADD', 'ADEA', 'ADERU', 'ADERW', 'ADES', 'ADGI', 'ADI', 'ADIL', 'ADILW', 'ADMA', 'ADMP', 'ADN', 'ADNWW', 'ADOC', 'ADOCR', 'ADOCW', 'ADP', 'ADPT', 'ADSE', 'ADSEW', 'ADSK', 'ADTH', 'ADTHW', 'ADTN', 'ADTX', 'ADUS', 'ADV', 'ADVM', 'ADVWW', 'ADXN', 'AEAC', 'AEACU', 'AEACW', 'AEAE', 'AEAEU', 'AEAEW', 'AEHA', 'AEHAW', 'AEHL', 'AEHR', 'AEI', 'AEIS', 'AEMD', 'AEON', 'AEP', 'AEPPZ', 'AERC', 'AEY', 'AEYE', 'AEZS', 'AFAR', 'AFARU', 'AFARW', 'AFBI', 'AFCG', 'AFIB', 'AFMD', 'AFRI', 'AFRIW', 'AFRM', 'AFYA', 'AGAE', 'AGBA', 'AGBAW', 'AGEN', 'AGFS', 'AGFY', 'AGGR', 'AGGRU', 'AGIL', 'AGILW', 'AGIO', 'AGLE', 'AGMH', 'AGNC', 'AGNCL', 'AGNCM', 'AGNCN', 'AGNCO', 'AGNCP', 'AGRI', 'AGRIW', 'AGRX', 'AGYS', 'AHCO', 'AHG', 'AHI', 'AHPA', 'AHRN', 'AHRNU', 'AHRNW', 'AIB', 'AIBBR', 'AIBBU', 'AIH', 'AIHS', 'AIMAU', 'AIMAW', 'AIMBU', 'AIMC', 'AIMD', 'AIMDW', 'AIP', 'AIRG', 'AIRS', 'AIRT', 'AIRTP', 'AKAM', 'AKAN', 'AKBA', 'AKLI', 'AKRO', 'AKTS', 'AKTX', 'AKU', 'AKYA', 'ALAR', 'ALBO', 'ALBT', 'ALCO', 'ALDX', 'ALEC', 'ALGM', 'ALGN', 'ALGS', 'ALGT', 'ALHC', 'ALIM', 'ALKS', 'ALKT', 'ALLK', 'ALLO', 'ALLR', 'ALLT', 'ALNY', 'ALOR', 'ALORU', 'ALORW', 'ALOT', 'ALPA', 'ALPAU', 'ALPN', 'ALPP', 'ALPS', 'ALR', 'ALRM', 'ALRN', 'ALRS', 'ALSA', 'ALSAR', 'ALSAU', 'ALSAW', 'ALT', 'ALTI', 'ALTIW', 'ALTO', 'ALTR', 'ALTU', 'ALTUU', 'ALTUW', 'ALVO', 'ALVOW', 'ALVR', 'ALXO', 'ALYA', 'ALZN', 'AMAL', 'AMAM', 'AMAO', 'AMAOU', 'AMAOW', 'AMAT', 'AMBA', 'AMCI', 'AMCIU', 'AMCX', 'AMD', 'AMED', 'AMEH', 'AMGN', 'AMKR', 'AMLI', 'AMLX', 'AMNB', 'AMOT', 'AMPG', 'AMPGW', 'AMPH', 'AMPL', 'AMRK', 'AMRN', 'AMRS', 'AMSC', 'AMSF', 'AMST', 'AMSWA', 'AMTB', 'AMTI', 'AMTX', 'AMV', 'AMWD', 'AMYT', 'AMZN', 'ANAB', 'ANDE', 'ANEB', 'ANGH', 'ANGHW', 'ANGI', 'ANGN', 'ANGO', 'ANIK', 'ANIP', 'ANIX', 'ANNX', 'ANPC', 'ANSS', 'ANTE', 'ANTX', 'ANY', 'ANZU', 'ANZUU', 'ANZUW', 'AOGO', 'AOGOU', 'AOGOW', 'AOSL', 'AOUT', 'APA', 'APAC', 'APACU', 'APACW', 'APCX', 'APCXW', 'APDN', 'APEI', 'APEN', 'APGN', 'APGNW', 'API', 'APLD', 'APLS', 'APLT', 'APM', 'APMI', 'APMIU', 'APOG', 'APP', 'APPF', 'APPH', 'APPHW', 'APPN', 'APPS', 'APRE', 'APTM', 'APTMU', 'APTO', 'APTX', 'APVO', 'APWC', 'APXI', 'APXIU', 'APXIW', 'APYX', 'AQB', 'AQMS', 'AQST', 'AQU', 'AQUNR', 'AQUNU', 'ARAV', 'ARAY', 'ARBE', 'ARBEW', 'ARBG', 'ARBGU', 'ARBGW', 'ARBK', 'ARBKL', 'ARCB', 'ARCE', 'ARCK', 'ARCKU', 'ARCKW', 'ARCT', 'ARDS', 'ARDX', 'AREB', 'AREBW', 'AREC', 'ARGX', 'ARHS', 'ARIZ', 'ARIZR', 'ARIZU', 'ARIZW', 'ARKO', 'ARKOW', 'ARKR', 'ARLP', 'AROW', 'ARPO', 'ARQQ', 'ARQQW', 'ARQT', 'ARRW', 'ARRWU', 'ARRWW', 'ARRY', 'ARTA', 'ARTE', 'ARTEU', 'ARTEW', 'ARTL', 'ARTLW', 'ARTNA', 'ARTW', 'ARVL', 'ARVN', 'ARWR', 'ARYD', 'ARYE', 'ASCA', 'ASCAR', 'ASCAU', 'ASCAW', 'ASCB', 'ASCBR', 'ASCBU', 'ASCBW', 'ASLE', 'ASLN', 'ASMB', 'ASML', 'ASND', 'ASNS', 'ASO', 'ASPA', 'ASPAU', 'ASPAW', 'ASPI', 'ASPS', 'ASPU', 'ASRT', 'ASRV', 'ASST', 'ASTC', 'ASTE', 'ASTI', 'ASTL', 'ASTLW', 'ASTR', 'ASTS', 'ASTSW', 'ASUR', 'ASYS', 'ATAI', 'ATAK', 'ATAKR', 'ATAKU', 'ATAKW', 'ATAT', 'ATAX', 'ATCOL', 'ATCX', 'ATEC', 'ATER', 'ATEX', 'ATHA', 'ATHE', 'ATHX', 'ATIF', 'ATLC', 'ATLCL', 'ATLCP', 'ATLO', 'ATLX', 'ATMC', 'ATMCR', 'ATMCU', 'ATMCW', 'ATMV', 'ATMVR', 'ATMVU', 'ATNF', 'ATNFW', 'ATNI', 'ATNX', 'ATOM', 'ATOS', 'ATRA', 'ATRC', 'ATRI', 'ATRO', 'ATSG', 'ATVCU', 'ATVI', 'ATXG', 'ATXI', 'ATXS', 'ATY', 'AUBAP', 'AUBN', 'AUDC', 'AUGX', 'AUID', 'AUPH', 'AUR', 'AURA', 'AURC', 'AURCU', 'AUROW', 'AUTL', 'AUUD', 'AUUDW', 'AUVI', 'AUVIP', 'AVAC', 'AVACU', 'AVACW', 'AVAH', 'AVAV', 'AVCO', 'AVCT', 'AVCTW', 'AVDL', 'AVDR', 'AVDX', 'AVEO', 'AVGO', 'AVGR', 'AVHI', 'AVHIU', 'AVHIW', 'AVID', 'AVIR', 'AVNW', 'AVO', 'AVPT', 'AVPTW', 'AVRO', 'AVT', 'AVTA', 'AVTE', 'AVTX', 'AVXL', 'AWH', 'AWRE', 'AXDX', 'AXGN', 'AXLA', 'AXNX', 'AXON', 'AXSM', 'AXTI', 'AY', 'AYRO', 'AYTU', 'AZ', 'AZN', 'AZPN', 'AZRX', 'AZTA', 'AZYO', 'BACK', 'BAER', 'BAERW', 'BAFN', 'BAND', 'BANF', 'BANFP', 'BANR', 'BANX', 'BAOS', 'BASE', 'BATRA', 'BATRK', 'BBBY', 'BBCP', 'BBGI', 'BBIG', 'BBIO', 'BBLG', 'BBLGW', 'BBQ', 'BBSI', 'BCAB', 'BCAN', 'BCBP', 'BCDA', 'BCDAW', 'BCEL', 'BCLI', 'BCML', 'BCOR', 'BCOV', 'BCOW', 'BCPC', 'BCRX', 'BCSA', 'BCSAU', 'BCSAW', 'BCTX', 'BCTXW', 'BCYC', 'BDSI', 'BDSX', 'BDTX', 'BEAM', 'BEAT', 'BEATW', 'BECN', 'BEEM', 'BEEMW', 'BELFA', 'BELFB', 'BFC', 'BFI', 'BFIIW', 'BFIN', 'BFL', 'BFRG', 'BFRGW', 'BFRI', 'BFRIW', 'BFST', 'BGCP', 'BGFV', 'BGNE', 'BGRY', 'BGRYW', 'BGXX', 'BHAC', 'BHACU', 'BHAT', 'BHF', 'BHFAM', 'BHFAN', 'BHFAO', 'BHFAP', 'BHSE', 'BIAF', 'BIAFW', 'BIDU', 'BIGC', 'BIIB', 'BILI', 'BIMI', 'BIOC', 'BIOL', 'BIOR', 'BIOSU', 'BIOSW', 'BIOT', 'BIOTU', 'BIOTW', 'BIOX', 'BIRD', 'BITF', 'BIVI', 'BJDX', 'BJRI', 'BKCC', 'BKNG', 'BKR', 'BKSC', 'BKYI', 'BL', 'BLACU', 'BLBD', 'BLBX', 'BLCM', 'BLDE', 'BLDEW', 'BLDP', 'BLEU', 'BLEUR', 'BLEUU', 'BLEUW', 'BLFS', 'BLFY', 'BLI', 'BLIN', 'BLKB', 'BLMN', 'BLNG', 'BLNGU', 'BLNGW', 'BLNK', 'BLNKW', 'BLPH', 'BLRX', 'BLTE', 'BLU', 'BLUE', 'BLZE', 'BMAQ', 'BMAQR', 'BMAQU', 'BMAQW', 'BMBL', 'BMEA', 'BMR', 'BMRA', 'BMRC', 'BMRN', 'BNFT', 'BNGO', 'BNGOW', 'BNIX', 'BNIXR', 'BNIXW', 'BNNR', 'BNNRU', 'BNOX', 'BNR', 'BNRG', 'BNSO', 'BNTC', 'BNTX', 'BOCN', 'BOCNU', 'BOCNW', 'BOKF', 'BOLT', 'BON', 'BOOM', 'BOSC', 'BOTJ', 'BOXL', 'BPAC', 'BPACU', 'BPACW', 'BPMC', 'BPOP', 'BPOPM', 'BPRN', 'BPTH', 'BPTS', 'BPYPM', 'BPYPN', 'BPYPO', 'BPYPP', 'BRACR', 'BRAG', 'BREA', 'BREZ', 'BREZR', 'BREZW', 'BRFH', 'BRID', 'BRIV', 'BRIVU', 'BRIVW', 'BRKH', 'BRKHU', 'BRKHW', 'BRKL', 'BRKR', 'BRKS', 'BRLI', 'BRLIR', 'BRLIU', 'BRLIW', 'BRLT', 'BROG', 'BROGW', 'BRP', 'BRPM', 'BRQS', 'BRSH', 'BRSHW', 'BRTX', 'BRY', 'BRZE', 'BSBK', 'BSET', 'BSFC', 'BSGA', 'BSGAR', 'BSGAU', 'BSGM', 'BSQR', 'BSRR', 'BSVN', 'BSY', 'BTAI', 'BTB', 'BTBD', 'BTBDW', 'BTBT', 'BTCS', 'BTCY', 'BTMD', 'BTMDW', 'BTOG', 'BTTX', 'BTWN', 'BTWNU', 'BTWNW', 'BUSE', 'BVS', 'BVXV', 'BWAC', 'BWACU', 'BWACW', 'BWAQ', 'BWAQR', 'BWAQU', 'BWAQW', 'BWAY', 'BWB', 'BWBBP', 'BWC', 'BWCAU', 'BWEN', 'BWFG', 'BWMN', 'BWMX', 'BWV', 'BXRX', 'BYFC', 'BYND', 'BYNO', 'BYNOU', 'BYNOW', 'BYRN', 'BYSI', 'BYTS', 'BYTSU', 'BYTSW', 'BZ', 'BZFD', 'BZFDW', 'BZUN', 'CAAS', 'CABA', 'CAC', 'CACC', 'CACO', 'CADL', 'CAKE', 'CALB', 'CALM', 'CALT', 'CAMP', 'CAMT', 'CAN', 'CAPR', 'CAR', 'CARA', 'CARE', 'CARG', 'CARV', 'CASA', 'CASH', 'CASI', 'CASS', 'CASY', 'CATC', 'CATY', 'CBAN', 'CBAT', 'CBAY', 'CBFV', 'CBIO', 'CBNK', 'CBRG', 'CBRGU', 'CBRGW', 'CBRL', 'CBSH', 'CBUS', 'CCAI', 'CCAIU', 'CCAIW', 'CCAP', 'CCB', 'CCBG', 'CCCC', 'CCCS', 'CCEP', 'CCIH', 'CCLD', 'CCLDO', 'CCLDP', 'CCLP', 'CCNC', 'CCNE', 'CCNEP', 'CCOI', 'CCRN', 'CCSI', 'CCTS', 'CCTSU', 'CCTSW', 'CD', 'CDAK', 'CDAQ', 'CDAQU', 'CDAQW', 'CDEV', 'CDIO', 'CDIOW', 'CDLX', 'CDMO', 'CDNA', 'CDNS', 'CDRO', 'CDROW', 'CDTX', 'CDW', 'CDXC', 'CDXS', 'CDZI', 'CDZIP', 'CEADW', 'CECE', 'CEG', 'CELC', 'CELH', 'CELU', 'CELUW', 'CELZ', 'CEMI', 'CENN', 'CENQ', 'CENQW', 'CENT', 'CENTA', 'CENX', 'CERE', 'CERS', 'CERT', 'CETUU', 'CETX', 'CETXP', 'CETY', 'CEVA', 'CFB', 'CFBK', 'CFFE', 'CFFEU', 'CFFI', 'CFFN', 'CFFS', 'CFFSU', 'CFFSW', 'CFIV', 'CFIVU', 'CFIVW', 'CFLT', 'CFMS', 'CFRX', 'CFSB', 'CG', 'CGABL', 'CGBD', 'CGC', 'CGEM', 'CGEN', 'CGNT', 'CGNX', 'CGRN', 'CGTX', 'CHCI', 'CHCO', 'CHDN', 'CHEA', 'CHEAU', 'CHEAW', 'CHEF', 'CHEK', 'CHEKZ', 'CHK', 'CHKE', 'CHKEL', 'CHKEW', 'CHKEZ', 'CHKP', 'CHMG', 'CHNR', 'CHPMU', 'CHRD', 'CHRS', 'CHRW', 'CHSCL', 'CHSCM', 'CHSCN', 'CHSCO', 'CHSCP', 'CHTR', 'CHUY', 'CHX', 'CIDM', 'CIFR', 'CIFRW', 'CIGI', 'CIH', 'CIIG', 'CIIGU', 'CIIGW', 'CINC', 'CINF', 'CING', 'CINGW', 'CISO', 'CITE', 'CITEU', 'CITEW', 'CIVB', 'CIZN', 'CJJD', 'CKPT', 'CLAQ', 'CLAR', 'CLAY', 'CLAYU', 'CLAYW', 'CLBK', 'CLBS', 'CLBT', 'CLBTW', 'CLDX', 'CLEU', 'CLFD', 'CLGN', 'CLIN', 'CLINR', 'CLINU', 'CLINW', 'CLIR', 'CLLS', 'CLMB', 'CLMT', 'CLNE', 'CLNN', 'CLNNW', 'CLOA', 'CLOE', 'CLOER', 'CLOEU', 'CLOV', 'CLPS', 'CLPT', 'CLRB', 'CLRC', 'CLRCR', 'CLRCU', 'CLRCW', 'CLRO', 'CLSD', 'CLSK', 'CLSN', 'CLST', 'CLVR', 'CLVRW', 'CLWT', 'CLXT', 'CMAX', 'CMAXW', 'CMBM', 'CMCA', 'CMCAU', 'CMCAW', 'CMCO', 'CMCSA', 'CMCT', 'CME', 'CMLS', 'CMMB', 'CMND', 'CMPO', 'CMPOW', 'CMPR', 'CMPS', 'CMPX', 'CMRA', 'CMRAW', 'CMRX', 'CMTL', 'CNAQU', 'CNCE', 'CNDT', 'CNET', 'CNEY', 'CNFR', 'CNGL', 'CNGLU', 'CNGLW', 'CNOB', 'CNOBP', 'CNSL', 'CNSP', 'CNTA', 'CNTB', 'CNTG', 'CNTQ', 'CNTX', 'CNTY', 'CNXA', 'CNXC', 'CNXN', 'COCO', 'COCP', 'CODA', 'CODX', 'COEP', 'COEPW', 'COFS', 'COGT', 'COHU', 'COIN', 'COKE', 'COLB', 'COLL', 'COLM', 'COMM', 'COMS', 'COMSP', 'COMSW', 'CONN', 'CONX', 'CONXU', 'CONXW', 'COOL', 'COOLU', 'COOLW', 'COOP', 'CORT', 'COSM', 'COST', 'COUP', 'COVA', 'COWG', 'COWN', 'COWNL', 'COYA', 'CPAAU', 'CPAQ', 'CPAQU', 'CPAQW', 'CPAR', 'CPARU', 'CPARW', 'CPHC', 'CPIX', 'CPLP', 'CPOP', 'CPRT', 'CPRX', 'CPSH', 'CPSI', 'CPSS', 'CPTN', 'CPTNW', 'CPZ', 'CRAI', 'CRBP', 'CRBU', 'CRCT', 'CRDF', 'CRDL', 'CRDO', 'CREC', 'CRECU', 'CRECW', 'CREG', 'CRESW', 'CRESY', 'CREX', 'CREXW', 'CRGE', 'CRGO', 'CRGOW', 'CRIS', 'CRKN', 'CRMD', 'CRMT', 'CRNC', 'CRNT', 'CRNX', 'CRON', 'CROX', 'CRSP', 'CRSR', 'CRTO', 'CRUS', 'CRVL', 'CRVS', 'CRWD', 'CRWS', 'CRZN', 'CRZNU', 'CSBR', 'CSCO', 'CSGP', 'CSGS', 'CSII', 'CSIQ', 'CSLM', 'CSLMR', 'CSLMU', 'CSLMW', 'CSPI', 'CSSE', 'CSSEL', 'CSSEN', 'CSSEP', 'CSTE', 'CSTL', 'CSTR', 'CSWC', 'CSWI', 'CSX', 'CTACU', 'CTAQ', 'CTAQU', 'CTAQW', 'CTAS', 'CTBI', 'CTG', 'CTHR', 'CTIB', 'CTIC', 'CTKB', 'CTLP', 'CTMX', 'CTRM', 'CTRN', 'CTSH', 'CTSO', 'CTXR', 'CUE', 'CUEN', 'CUENW', 'CULL', 'CURI', 'CURIW', 'CUTR', 'CVAC', 'CVBF', 'CVCO', 'CVCY', 'CVGI', 'CVGW', 'CVKD', 'CVLG', 'CVLT', 'CVLY', 'CVRX', 'CVT', 'CVV', 'CWBC', 'CWBR', 'CWCO', 'CWST', 'CXDO', 'CYAD', 'CYAN', 'CYBR', 'CYCC', 'CYCCP', 'CYCN', 'CYN', 'CYRN']