from api.viewsets import ClientViewset
from api.viewsets import TradiesViewset
from  rest_framework import routers

router = routers.DefaultRouter()
router.register('client', ClientViewset)

router.register('tradies', TradiesViewset)